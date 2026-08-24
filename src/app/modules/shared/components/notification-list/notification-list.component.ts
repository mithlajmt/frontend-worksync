import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiutitilityService } from 'src/app/modules/departmenthead/services/apiUtitility.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  upcomingEvents: any[] = [];
  allEvents: any[] = [];
  loaded: boolean = false;

  constructor(
    private api: ApiutitilityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void { 
    const currentUrl = this.router.url;
    const urlParts = currentUrl.split('/');
    
    this.api.getNotificationList(urlParts[1]).subscribe({
      next: (res: any) => {
        this.allEvents = [...res.previousOrAllNotifications];
        this.upcomingEvents = [...res.upcomingNotifications];
        this.loaded = true;
      },
      error: (err) => {
        console.error(err);
        this.loaded = true;
      }
    });
  }  
}
