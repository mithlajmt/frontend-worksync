// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { JwtService } from 'src/app/services/jwt.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginData!:Login;
  

  constructor(
    private fb: FormBuilder,
    private http:HttpClient,
    private router:Router,
    private api:ApiService,
    private jwt:JwtService
    ) { }
 
  ngOnInit(): void {    
    this.loginForm = this.fb.group({
      userID:['',Validators.required],
      password:['',Validators.minLength(7)],
      rememberMe:[false]
    })
  }


  onSubmit(): void {
    this.loginData=this.loginForm.value
    console.log(this.loginData)
    this.api.login(this.loginData).subscribe({
      
      next:(res)=>{
        console.log(res);
        
        
        
        if(res.success){
          console.log('chathisghatt');
          this.jwt.setToken(res.token)
         const decodedToken= this.jwt.decodeToken(res.token)
         console.log(decodedToken.companyID,decodedToken.role);
         if(decodedToken.role === 'employee'){
         }
         else if(decodedToken.role === 'companyAdmin'){
          this.router.navigate(['/company/dashboard'])
         }
         else if(decodedToken.role === 'admin'){
          // this.router.navigate(['/company/dashboard'])
         }
         else if(decodedToken.role === 'departmentHead'){
          // this.router.navigate(['/company/dashboard'])
         }

        }
      },
      error:(err)=>{
        console.log(err);
        
      }
    })



  }
}
