import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private userapi = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  addingEmployee(employee: any) {
    return this.http.post(`${this.userapi}/employee`, employee, httpOptions).pipe(
      catchError((error: any) => {
        console.error('API Error:', error);
        throw error;  // Rethrow the error after logging
      })
    );
  }

  addingDepartment(department: any) {
    return this.http.post(`${this.userapi}/department`, department, httpOptions)
      .pipe(
        catchError((error: any) => {
          console.error('API Error:', error);
          throw error;  // Rethrow the error after logging
        })
      );
  }
  
}
