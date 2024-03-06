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


  eventsArray:any =[] 
  datas:any = []
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: this.eventsArray,
  };


  

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }

  ngOnInit(): void {
    
    console.log(this.eventsArray);
    this.attendance.attandanceCalendar().subscribe({
      next:(res)=>{
        console.log(res);
        if(res.success){
          res.data.map((el:any)=>{
            // this.eventsArray.push({ date: '2024-03-06', title: '', color:'red'});
            this.eventsArray.push(el)   
          })
          this.showCalendar=true
        }
      },
      error:(err)=>{

      }
    })
  }

}
