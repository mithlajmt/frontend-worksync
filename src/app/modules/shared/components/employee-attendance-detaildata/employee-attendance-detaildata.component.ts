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


  eventsArray:any =[] 
  datas:any = []
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    // dateClick: (arg) => this.handleDateClick(arg),
    events: this.eventsArray,
  };

  constructor(
    private common:CommonService,
    private route:ActivatedRoute,
  ){}
  ngOnInit(): void {
    const routers = this.route.snapshot.url;
    const empID = routers[1].path
    this.common.getEmployeeAttendance(empID).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.attendanceData = [...res.attendance]
        this.eventsArray = [...res.calendarDataEmp]
        this.showCalendar = true
        console.log(this.eventsArray)
        
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


}
