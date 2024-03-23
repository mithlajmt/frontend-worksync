import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiutitilityService } from 'src/app/modules/departmenthead/services/apiUtitility.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  upcomingEvents:any[]=[]
  allEvents :any[]=[]

  constructor(
    private api: ApiutitilityService,
    private route : ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void { 
    const currentUrl = this.router.url;
    // console.log('Current URL:', currentUrl);
    const urlParts = currentUrl.split('/')
    
    this.api.getNotificationList(urlParts[1]).subscribe({
      next:(res:any)=>{
        console.log(res);
        console.log(res.upcomingNotifications);
        this.allEvents = [...res.previousOrAllNotifications]
        this.upcomingEvents = [...res.upcomingNotifications]
        

      },
      error:(err)=>{

      }
    })
  }  
}
