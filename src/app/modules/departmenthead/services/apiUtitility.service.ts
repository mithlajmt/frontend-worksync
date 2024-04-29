import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiutitilityService {
  private userapi = 'https://3.110.131.124/departmentHead';
  constructor(
    private http:HttpClient,
  ) { }

  getDepartmentData(departmentID:any){
    return this.http.get(`${this.userapi}/department/${departmentID}`)
  }

  getComplaintsList(){
    return this.http.get('https://3.110.131.124/complaintsList')
  }

  updateComplaint(id:string,status:string){
    alert(status)
    return this.http.patch(`http://localhost:4000/complaintsList/${id}`,{status:status});
  }

  getNotificationList(role:string){
    console.log(role);
    
    return this.http.get(`http://localhost:4000/${role}/notification`)
  }
}
