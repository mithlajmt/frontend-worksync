import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiutitilityService {
  private userapi = 'http://localhost:4000/departmentHead';
  constructor(
    private http:HttpClient,
  ) { }

  getDepartmentData(departmentID:any){
    return this.http.get(`${this.userapi}/department/${departmentID}`)
  }

  getComplaintsList(){
    return this.http.get('http://localhost:4000/complaintsList')
  }

  updateComplaint(id:string,status:string){
    alert(status)
    return this.http.patch(`http://localhost:4000/complaintsList/${id}`,{status:status});
  }

  getNotificationList(role:string){    
    return this.http.get(`http://localhost:4000/${role}/notification`)
  }
}
