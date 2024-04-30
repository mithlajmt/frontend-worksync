import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { EmployeeEditForm } from '../interfaces/employee-edit-form';


 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private userapi = 'https://worksyncback.illuminatespark.com/companyAdmin';

  constructor(private http: HttpClient) { }


  getEmployees(){
    return this.http.get<any>(`${this.userapi}/employee`,)
  }



  addingEmployee(employee: any) {
    
    return this.http.post(`${this.userapi}/employee`, employee).pipe(
      catchError((error: any) => {
        console.error('API Error:', error);
        throw error;  // Rethrow the error after logging
      })
    );
  }


  deletingEmployee(employeeID:string){
    
    return this.http.delete(`${this.userapi}/employee/${employeeID}`);
  }

  addingDepartment(department: any) {
    return this.http.post(`${this.userapi}/department`, department)
      .pipe(
        catchError((error: any) => {
          console.error('API Error:', error);
          throw error;  // Rethrow the error after logging
        })
      );
  }

  getEmployeeData(employeeID:string){
    return this.http.get(`${this.userapi}/employee/${employeeID}`);
  }


  updateEmployee(employeeID:string,updateEmployeeData:EmployeeEditForm){
    return this.http.put(`${this.userapi}/employee/${employeeID}`,updateEmployeeData);
  }

  getDepartments(){
    return this.http.get(`${this.userapi}/departments`)
  }
  
  getDepartmentData(depID:string){
    return this.http.get(`${this.userapi}/department/${depID}`)
  }

  getLeaveRequests(){
    return this.http.get(`${this.userapi}/leaveRequests`)
  }

  updateLeaveRequest(id:string,status:string){
    return this.http.patch(`${this.userapi}/leaveRequests/${id}`,{status})
  }

  getDepID(){
    return this.http.get(`https://worksyncback.illuminatespark.com/DepartmentID`)
  }
}
