import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiutitilityService {
  private userapi = 'https://worksyncback.illuminatespark.com/departmentHead';
  constructor(
    private http:HttpClient,
  ) { }

  getDepartmentData(departmentID:any){
    return this.http.get(`${this.userapi}/department/${departmentID}`)
  }

  getComplaintsList(){
    return this.http.get('https://worksyncback.illuminatespark.com/complaintsList')
  }

  updateComplaint(id:string,status:string){
    alert(status)
    return this.http.patch(`https://worksyncback.illuminatespark.com/complaintsList/${id}`,{status:status});
  }

  getNotificationList(role:string){
    console.log(role);
    
    return this.http.get(`https://worksyncback.illuminatespark.com/${role}/notification`)
  }
}
