import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private userApi = 'http://localhost:4000';

  constructor(
    private http:HttpClient
  ) { }

  getUserDetails(){
    return this.http.get(`${this.userApi}/userData`);
  }

 
  getListData(endpoint:string){
    return this.http.get(`${this.userApi}/${endpoint}`);

  }

  postNotification(noty:any){
    return this.http.post<any>(`${this.userApi}/notification`,noty);
  }

  getProfile(){
    return this.http.get<any>(`${this.userApi}/profile`,);
  }

  UpdateProfile(body:any){
    return this.http.patch<any>(`${this.userApi}/profile`,body);
  }
  getUsernameAndProfile(){
    return this.http.get<any>(`${this.userApi}/profileInfo`,);
  }

  
  addTask(task:any){
    return this.http.post(`${this.userApi}/todo`,task);
  }

  getTasks(){
    return this.http.get(`${this.userApi}/todo`);
  }

  getchatList(){
    return this.http.get(`${this.userApi}/chatlist`);
  }

  getReciever(id:any){
    return this.http.get(`${this.userApi}/RecieverProfile/${id}`);
  }
 
}
