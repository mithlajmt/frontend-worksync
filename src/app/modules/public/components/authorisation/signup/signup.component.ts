// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { Component } from '@angular/core';
import { Signup } from '../../../interfaces/signup';

@Component({
  selector: 'app-sigup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  signupForm: FormGroup;
  showOtpComp:Boolean=false;
  errorMessage:any
  isSubmitted:boolean=false

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
  ) {
    this.signupForm = this.fb.group({
      companyName: ['', [Validators.required]], 
      industry: ['', [Validators.required]],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactNumber: [
        '',
        [Validators.required, Validators.pattern('[0-9]{10}')],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
      
    });
  }

  signupFormData!:Signup;

  ngOnInit(): void {}

  canExit(){
    if(this.signupForm.dirty){
      return confirm('you have unsaved changes do you really want to navigate away ?')
    }
    else{
      return true
    }
  }


  onSubmit() {
    this.isSubmitted=true
    this.signupFormData = this.signupForm.value
    // Add your form submission logic here
    console.log(this.signupForm);
    this.apiService.userSignupPost(this.signupFormData)
    .subscribe({
      next:(res:any)=>{
        this.showOtpComp=true
        this.errorMessage=''
        console.log(res);
        
      },
      error: (err: any) => {
        this.showOtpComp = false; 
        this.errorMessage = err.error?.data?.message || 'An error occurred.';
        console.error(err);
      },
    });


    this.showOtpComp=true
}
}
