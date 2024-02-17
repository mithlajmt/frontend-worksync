import { Component } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private api:JwtService){}
  minu(){
    console.log('ji');
    
    const po = this.api.getTokenFromLocalStorage()
    console.log(po);
    
  }
}
