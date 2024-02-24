import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { EmployeeEditForm } from '../interfaces/employee-edit-form';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private userapi = 'http://localhost:4000/company';

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
    return this.http.delete(`${this.userapi}/employee?selected=${employeeID}`);
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
  
}
