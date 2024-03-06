import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  private userApi = 'http://localhost:4000/complaints';


  constructor(
    private http:HttpClient,
  ) { }

  registerComplaint(complaint:any) {
    console.log(complaint,'alfjlka');
    
    return this.http.post(this.userApi,complaint)
  }


}
