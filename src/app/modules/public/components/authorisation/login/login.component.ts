// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { JwtService } from 'src/app/services/jwt.service';
import { userData } from 'src/app/services/userData.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginData!:Login;
  error=''
  

  quotes = [
    {
      text: "Great things in business are never done by one person. They're done by a team of people.",
      author: "Steve Jobs",
      title: "Co-Founder, Apple Inc.",
      initials: "SJ"
    },
    {
      text: "Efficiency is doing things right; effectiveness is doing the right things.",
      author: "Peter Drucker",
      title: "Management Consultant & Author",
      initials: "PD"
    },
    {
      text: "Alone we can do so little; together we can do so much.",
      author: "Helen Keller",
      title: "Author & Activist",
      initials: "HK"
    },
    {
      text: "Productivity is never an accident. It is always the result of a commitment to excellence.",
      author: "Paul J. Meyer",
      title: "Pioneer in Personal Growth",
      initials: "PM"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      title: "Co-Founder, Apple Inc.",
      initials: "SJ"
    },
    {
      text: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
      title: "Renowned Author & Humorist",
      initials: "MT"
    },
    {
      text: "Success is best when it's shared.",
      author: "Howard Schultz",
      title: "Former CEO, Starbucks",
      initials: "HS"
    },
    {
      text: "Quality means doing it right when no one is looking.",
      author: "Henry Ford",
      title: "Founder, Ford Motor Company",
      initials: "HF"
    }
  ];

  selectedQuote: any;

  constructor(
    private fb: FormBuilder,
    private http:HttpClient,
    private router:Router,
    private api:ApiService,
    private jwt:JwtService,
    private user:userData
    ) { }
 
  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.selectedQuote = this.quotes[randomIndex];

    this.loginForm = this.fb.group({
      userID:['',Validators.required],
      password:['',Validators.minLength(6)],
      rememberMe:[false]
    })
  }

  get f() {
    return this.loginForm.controls;
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

         if(decodedToken.role === 'employee' || decodedToken.role === 'intern'){
          this.user.role = decodedToken.role;
          
          this.router.navigate(['/employee/checkIn'])
         }
         else if(decodedToken.role === 'companyAdmin'){
          this.user.role = 'companyAdmin'

          this.router.navigate(['/companyAdmin/dashboard'])
         }
         else if(decodedToken.role === 'admin'){
          this.user.role = 'admin'

          this.router.navigate(['/admin/dashboard'])

          // this.router.navigate(['/company/dashboard'])
         }
         else if(decodedToken.role === 'departmentHead'){
          this.user.role = 'departmentHead'
          this.router.navigate(['/departmentHead/checkIn'])
          // this.router.navigate(['/company/dashboard'])
         } 

        }
      },
      error:(err)=>{
        console.log(err);
        this.error=err.error.message
        
      }
    })



  }
}
