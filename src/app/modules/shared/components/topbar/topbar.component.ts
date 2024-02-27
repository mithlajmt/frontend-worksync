import { Component } from '@angular/core';
import { AuthguardService } from 'src/app/services/authguard.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  constructor(private authGuardService: AuthguardService) {}
  ngOnInit() {
    this.authGuardService.shareTextBehaviourSubject.subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }
}
