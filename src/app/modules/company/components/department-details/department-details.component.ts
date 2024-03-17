import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  employeeData:any;


  constructor(
    private api:ApiService,
    private active:ActivatedRoute
  ){}

  ngOnInit(): void {
    const ID = this.active.snapshot.params['id'];
  
    this.api.getDepartmentData(ID).subscribe({
      next: (res: any) => {
        // console.log(res, 'Response from API');
  
        // Check if 'data' property exists and has at least one element
        if (res?.data?.length > 0) {
          // Access the first element of 'data' array
          const departmentData = res.data[0];
  
          // Check if 'employees' property exists
          if (departmentData?.employees) {
            // Assign 'employees' array to 'employeeData'
            this.employeeData = [...departmentData.employees ] ;
  
            console.log(this.employeeData, 'Employee data');
          } else {
            console.error('Employees data not found in the response');
          }
        } else {
          console.error('Empty or invalid data response');
        }
      },
      error: (err) => {
        console.log(err, 'Error fetching department data');
      }
    });
  }
  
  

}
