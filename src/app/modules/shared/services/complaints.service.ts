import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  private userApi = 'https://worksyncback.illuminatespark.com/complaints';


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
