import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiutitilityService {
  private userapi = 'https://worksync.illuminatespark.com/departmentHead';
  constructor(
    private http:HttpClient,
  ) { }

  getDepartmentData(departmentID:any){
    return this.http.get(`${this.userapi}/department/${departmentID}`)
  }

  getComplaintsList(){
    return this.http.get('https://worksync.illuminatespark.com/complaintsList')
  }

  updateComplaint(id:string,status:string){
    alert(status)
    return this.http.patch(`https://worksync.illuminatespark.com/complaintsList/${id}`,{status:status});
  }

  getNotificationList(role:string){    
    return this.http.get(`https://worksync.illuminatespark.com/${role}/notification`)
  }
}
