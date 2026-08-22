import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  private userApi = `${environment.apiUrl}/complaints`;


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
