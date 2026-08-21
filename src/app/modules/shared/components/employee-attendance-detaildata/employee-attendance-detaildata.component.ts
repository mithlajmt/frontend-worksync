import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modules/public/services/api.service';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute, Route } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'; 
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-employee-attendance-detaildata',
  templateUrl: './employee-attendance-detaildata.component.html',
  styleUrls: ['./employee-attendance-detaildata.component.css']
})
export class EmployeeAttendanceDetaildataComponent implements OnInit {
   attendanceData :any[] = []
  showCalendar:boolean=false;


  eventsArray: any = [];
  datas: any = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: this.eventsArray,
  };

  handleDateClick(arg: any) {
    const clickedDate = arg.dateStr;
    const record = this.attendanceData.find((item: any) => item.date === clickedDate);

    if (record) {
      const checkIn = record.checkIn || 'Not Recorded';
      const checkOut = record.checkOut || record.checkout || (record.status === 'present' || record.status === 'late' ? 'In Progress / None' : 'N/A');
      const statusStr = record.status ? record.status.toUpperCase() : 'RECORDED';
      alert(`📅 Date: ${clickedDate}\n\nStatus: ${statusStr}\n⏰ Check-In Time: ${checkIn}\n🚪 Check-Out Time: ${checkOut}`);
    } else {
      alert(`📅 Date: ${clickedDate}\n\nNo check-in or attendance record found for this day.`);
    }
  }

  constructor(
    private common: CommonService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const routers = this.route.snapshot.url;
    const empID = routers[1].path;
    this.common.getEmployeeAttendance(empID).subscribe({
      next: (res: any) => {
        console.log(res);
        this.attendanceData = [...(res.attendance || [])];
        this.eventsArray = (res.calendarDataEmp || []).map((el: any) => ({
          title: el.title === 'dd' || !el.title ? (el.status === 'present' ? 'Present' : (el.status === 'late' ? 'Late' : 'Leave')) : el.title,
          start: el.start || el.date,
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
        console.log(this.eventsArray);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
