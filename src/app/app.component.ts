import { Component, OnInit } from '@angular/core';
import { JwtService } from './services/jwt.service';
import { userData } from './services/userData.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-worksyc';
  isLoading$ = this.loadingService.isLoading$; 

  token = localStorage.getItem('yourToken')
  constructor(
    private jwt: JwtService,
    private user:userData,
    private loadingService:LoadingService
  ){}
  
  ngOnInit(): void {


    const dtoken = this.jwt.decodeToken(this.token)
    this.user.role = dtoken.role

  }



}
