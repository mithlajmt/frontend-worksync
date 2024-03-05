import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import { AttendenceService } from '../../services/attendence.service';
import { reduce } from 'rxjs';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-attendencecalender',
  templateUrl: './attendencecalender.component.html',
  styleUrls: ['./attendencecalender.component.css']
})
export class AttendencecalenderComponent implements OnInit  {
  constructor(
    private attendance:AttendenceService,
    private datepipe:DatePipe,
  ){}
  showCalendar:boolean=false;


  eventsArray:any =[
    // { title: 'event 1', date: '2024-03-04',color:'red' },
    // { title: 'event 2', date: '2024-03-02', color:'red'}
  ] 
  datas:any = []
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: this.eventsArray
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
            // this.eventsArray.title = el.title         
            // this.eventsArray.date = el.date         
            // this.eventsArray.color = el.color         

          })
          this.showCalendar=true
          console.log(this.eventsArray);
          this.datas.push(this.eventsArray)
          console.log(this.datas,'gsga');
          
        }
        

        

      },
      error:(err)=>{

      }
    })
  }

}
