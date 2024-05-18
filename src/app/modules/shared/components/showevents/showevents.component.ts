import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import { CommonService } from '../../services/common.service';
import { isArray } from 'chart.js/dist/helpers/helpers.core';

@Component({
  selector: 'app-showevents',
  templateUrl: './showevents.component.html',
  styleUrls: ['./showevents.component.css']
})
export class ShoweventsComponent implements OnInit {

  showCalendar:boolean=false;

  constructor(
    private common:CommonService
  ){}


  eventsArray:any =[] 
  datas:any = []


  ngOnInit(): void {
    this.common.getEventsCalendarData().subscribe({
      next:(res:any)=>{
        console.log(res)
        res.data.forEach((element:any) => {
          this.eventsArray.push(element)
        });
        console.log(this.eventsArray,'lk')
        this.showCalendar = true
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: this.eventsArray
  };



  handleDateClick(arg:any){
    
  }


}
