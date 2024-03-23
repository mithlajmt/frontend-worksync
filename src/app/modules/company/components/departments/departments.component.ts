import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  departments:any=[]



showAddDepartmentForm=false


myForm!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private api:ApiService,
    private router:Router,
     ) {}

     ngOnInit() {


      this.myForm = this.fb.group({
        departmentName: ['', Validators.required],
        description: ['', Validators.required],
        budgetAllocation: [0, Validators.required]
      });

      this.api.getDepartments().pipe(
        map((res: any) => res?.data ? res.data.map((summary: any) => ({ name: summary.departmentName,ID:summary.departmentID, totalEmployees: summary.totalEmployees, attendancesToday: summary.attendancesToday })) : [])

      ).subscribe({
        next: (departments: any[]) => {
          // console.log(departments);
          this.departments = departments;
        },
        error: (err) => {
          console.log(err,'kidmanfdsAKJDajdslkADLKHalkjdhAKDSahdlAK');
        }
      });
    }
    
    addDepartment(){
      const form = this.myForm.value
      console.log(this.myForm.value);
      this.api.addingDepartment(form).subscribe({
        next:(res)=>{
          // console.log(res)
          

          this.myForm.reset()
          this.showAddDepartmentForm=false;
        },
        error:(err)=>{
          console.log(err);
      }
    })

  }


  selectDepartment(department: string) {
    console.log(department);
    const depID = department;  // Assuming 'department' represents the department ID
    // console.log(depID);
  
    // Navigate to the department details route, passing the department ID as a parameter
    this.router.navigate(['/companyAdmin/departments', depID]);
  }
  
}
