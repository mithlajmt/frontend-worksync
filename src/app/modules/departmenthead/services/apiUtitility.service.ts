import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiutitilityService {
  private userapi = `${environment.apiUrl}/departmentHead`;
  constructor(
    private http:HttpClient,
  ) { }

  getDepartmentData(departmentID:any){
    return this.http.get(`${this.userapi}/department/${departmentID}`)
  }

  getComplaintsList(){
    return this.http.get(`${environment.apiUrl}/complaintsList`)
  }

  updateComplaint(id:string,status:string){
    return this.http.patch(`${environment.apiUrl}/complaintsList/${id}`,{status:status});
  }

  getNotificationList(role:string){    
    return this.http.get(`${environment.apiUrl}/${role}/notification`)
  }
}
