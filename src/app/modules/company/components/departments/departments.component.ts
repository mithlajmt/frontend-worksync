import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  departments=[{
    name:'minu'
  },{
    name:'minu'
  },{
    name:'minu'
  },{
    name:'minu'
  },]



showAddDepartmentForm=false


myForm!:FormGroup;

  constructor(private fb: FormBuilder, private api:ApiService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      departmentName: ['', Validators.required],
      description: ['', Validators.required],
      budgetAllocation: [0, Validators.required]
    });
  }


  addDepartment(){
    const form = this.myForm.value
    console.log(this.myForm.value);
    this.api.addingDepartment(form).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err);
      }
    })

  }


  selectDepartment(mi:any){

  }

}
