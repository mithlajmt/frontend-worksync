import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/services/authguard.service';
import { JwtService } from 'src/app/services/jwt.service';
import { CommonService } from '../../../services/common.service';
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
  companyName:string='';
  role:string=''
  constructor(
    private router:Router ,
    private jwt:JwtService,
    private authGuarService: AuthguardService,
    private common:CommonService
      ){}

  ngOnInit(): void {
    const token:any = this.jwt.getTokenFromLocalStorage()
    this.common.getUserDetails().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.companyName = res.data[0].companyName;
        this.role = res.data[0].role       
        this.isCompany = this.role == 'companyAdmin'
    console.log(this.isCompany);
    
    this.isAdmin = this.role == 'admin'
    this.isEmployee = this.role == 'employee'
     this.isDepartmentHead = this.role == 'departmentHead' 
      },
      error:(err)=>{
        console.log(err);
      }
            
    })
    // console.log(token)
    // const decodedToken = this.jwt.decodeToken(token) 
    // console.log(decodedToken.role);
    
     
  }

  passString(string: string): void {
    this.authGuarService.shareTextBehaviourSubject.next(string);
  } 
  
  ji(){
    localStorage.clear()
    this.router.navigate(['signup'])
  }
  navigate(link:string){
    console.log(this.role);
    
    this.router.navigate([`/${this.role}/${link}`]);
  }
}
