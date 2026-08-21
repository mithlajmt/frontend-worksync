import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import { AttendenceService } from '../../services/attendence.service';




@Component({
  selector: 'app-attendencecalender',
  templateUrl: './attendencecalender.component.html',
  styleUrls: ['./attendencecalender.component.css']
})
export class AttendencecalenderComponent implements OnInit  {
  constructor(
    private attendance:AttendenceService,
  ){}
  showCalendar:boolean=false;


  eventsArray:any =[];
  rawAttendanceData: any[] = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: this.eventsArray,
  };


  

  handleDateClick(arg: any) {
    const clickedDate = arg.dateStr;
    const record = this.rawAttendanceData.find((item: any) => item.date === clickedDate);

    if (record) {
      const checkIn = record.checkIn || 'Not Recorded';
      const checkOut = record.checkOut || record.checkout || (record.status === 'present' || record.status === 'late' ? 'In Progress / None' : 'N/A');
      const statusStr = record.status ? record.status.toUpperCase() : 'RECORDED';
      alert(`📅 Date: ${clickedDate}\n\nStatus: ${statusStr}\n⏰ Check-In Time: ${checkIn}\n🚪 Check-Out Time: ${checkOut}`);
    } else {
      alert(`📅 Date: ${clickedDate}\n\nNo check-in or attendance record found for this day.`);
    }
  }

  ngOnInit(): void {
    this.attendance.attandanceCalendar().subscribe({
      next:(res)=>{
        console.log('Attendance calendar response:', res);
        if(res.success){
          const list = res.data || res.attendance || res.calendarDataEmp || [];
          this.rawAttendanceData = list;
          this.eventsArray = list.map((el: any) => ({
            title: el.title && el.title !== 'dd' ? el.title : (el.status === 'present' ? 'Present' : (el.status === 'late' ? 'Late' : 'Leave')),
            start: el.date || el.start,
            color: el.color && el.color !== 'black' && el.color !== 'green' && el.color !== 'red' && el.color !== 'yellow'
              ? el.color
              : (el.status === 'present' || el.color === 'green' ? '#22c55e' : (el.status === 'late' || el.color === 'yellow' ? '#eab308' : '#ef4444')),
          }));
          this.calendarOptions = {
            ...this.calendarOptions,
            dateClick: (arg) => this.handleDateClick(arg),
            events: [...this.eventsArray]
          };
          this.showCalendar = true;
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
