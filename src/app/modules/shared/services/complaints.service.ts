import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  private userApi = 'https://3.110.131.124/complaints';


  constructor(
    private http:HttpClient,
  ) { }

  registerComplaint(complaint:any) {    
    return this.http.post(`${this.userApi}`,complaint)
  }
  
  getComplaints(){
    return  this.http.get(`${this.userApi}`)
  }


}
