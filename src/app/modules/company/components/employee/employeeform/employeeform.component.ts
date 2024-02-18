import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

interface Department {
  name: string;
}

const emailPattern = '[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z]{2,6}';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent {
  reactiveForm!: FormGroup;
  formData:any

  submitted = false;



  constructor(private formBuilder: FormBuilder, private api:ApiService) {
    this.reactiveForm = this.formBuilder.group({
      employeeName: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]], // Use Validators.email for email validation
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Validate for 10-digit phone number
      hireDate: ['', Validators.required],
      department: ['', [Validators.required, Validators.minLength(2)]],
      role: ['', [Validators.required, Validators.minLength(2)]],
      identityProof: ['',],
    });
  }

  onSubmit(){
    console.log(this.reactiveForm.value);
    this.formData = this.reactiveForm.value

    this.api.addingEmployee(this.formData).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

    
  }
  
    }
  

