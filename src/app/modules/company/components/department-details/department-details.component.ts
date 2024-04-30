import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  message='';
  employeeData:any;
  ID:any


  constructor(
    private api:ApiService,
    private active:ActivatedRoute,
    private jwt:JwtService,
    private router:Router
  ){}

  ngOnInit(): void {

    const Token = this.jwt.getTokenFromLocalStorage();
    const decTok = this.jwt.decodeToken(Token)
    
    if(decTok.role=='departmentHead'){

      this.api.getDepID().subscribe({
        next:(res:any)=>{
          this.ID = res.data.departmentID  
          this.getData()    
        },
        error:(err)=>{
          console.log(err);     
          alert(err.error.message)
            

        }
      })

    }
    else{
      this.ID = this.active.snapshot.params['id'];
      this.getData()
    }

  }

  getData(){
    this.api.getDepartmentData(this.ID).subscribe({
      next: (res: any) => {
        console.log(res, 'Response from API');
  
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
            console.error('Employees data not found in the response')
            this.message = 'No existing Employee Found'
          }
        } else {
          console.error('Empty or invalid data response');
          this.message = 'No  Employee Found at the moment'

        }
      },
      error: (err) => {
        console.log(err, 'Error fetching department data');
      }
    });
  }

  onRowClick(id:any){
    this.router.navigate(['.',id ], { relativeTo: this.active });
  }
  
  

}