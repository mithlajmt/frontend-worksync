import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ApiService } from 'src/app/modules/public/services/api.service';
import { ApiService } from 'src/app/modules/company/services/api.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  deleteConfirm:boolean=false
  confirmationMessage: string = '';
  bodyText: string = '';
  employeeToDelete:string=''
  employees!:any[]
  constructor(
    private http:HttpClient,
    private router:Router,
    private route:ActivatedRoute,
    private api:ApiService
  ) { }

 ngOnInit(): void {
  this.api.getEmployees().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.employees = res
    }
  })
 }
 
 onCancelConfirmation(){
  this.deleteConfirm=false
  this.employeeToDelete=''
 }

 onDeleteButtonClick(employee:string){
  this.deleteConfirm=true
  this.confirmationMessage='Confirm Deletion'
  this.bodyText='Are you sure you want to delete?'
  this.employeeToDelete = employee 
 }

 onConfirmation(){
  this.deleteEmployee(this.employeeToDelete)
  
 }
 
 
 addQuerry(empId:string){
  const queryparam = {
    selected:empId
  }
  this.router.navigate([],{
    relativeTo:this.route,
    queryParams:queryparam,
  })
 }


 deleteEmployee(employeeID: any) {
  this.api.deletingEmployee(employeeID).subscribe({
    next: (res: any) => {
      if (res.success) {
        console.log(res);
        this.employeeToDelete = '';
        this.deleteConfirm = false;
        // Remove the deleted employee from the local array
        this.employees = this.employees.filter(employee => employee.employeeID !== employeeID);
      }
    },
    error: (err: any) => {
      console.error('Error deleting employee:', err);
      // Handle the error, e.g., show a notification or log it
    }
  });
}
}
