import { Component, OnInit } from '@angular/core';
import { JwtService } from './services/jwt.service';
import { userData } from './services/userData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-worksyc';

  token = localStorage.getItem('authToken')
  constructor(
    private jwt: JwtService,
    private user:userData,
  ){}
  
  ngOnInit(): void {
    const dtoken = this.jwt.decodeToken(this.token)
    this.user.role = dtoken.role

  }



}
