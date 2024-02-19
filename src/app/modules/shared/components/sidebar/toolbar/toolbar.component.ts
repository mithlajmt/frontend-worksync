import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isCompany:boolean=false
  constructor(private router:Router , private jwt:JwtService){}

  ngOnInit(): void {
    const token:any = this.jwt.getTokenFromLocalStorage()
    console.log(token)
    const decodedToken = this.jwt.decodeToken(token) 
    console.log(decodedToken.role);
    this.isCompany = decodedToken.role == 'companyAdmin'
  }


  ji(){
    localStorage.clear()
    this.router.navigate(['signup'])
  }
}
