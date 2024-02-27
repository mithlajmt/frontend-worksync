import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/services/authguard.service';
import { JwtService } from 'src/app/services/jwt.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isCompany:boolean=false
  isAdmin:boolean=false
  isDepartmentHead:boolean=false
  isEmployee:boolean=false
  constructor(private router:Router , private jwt:JwtService, private authGuarService: AuthguardService){}

  ngOnInit(): void {
    const token:any = this.jwt.getTokenFromLocalStorage()
    console.log(token)
    const decodedToken = this.jwt.decodeToken(token) 
    console.log(decodedToken.role);
    this.isCompany = decodedToken.role == 'companyAdmin'
    this.isAdmin = decodedToken.role == 'admin'
    this.isEmployee = decodedToken.role == 'employee'
     this.isDepartmentHead = decodedToken.role == 'departmenthead'
  }

  passString(string: string): void {
    this.authGuarService.shareTextBehaviourSubject.next(string);
  } 
  
  ji(){
    localStorage.clear()
    this.router.navigate(['signup'])
  }
}
