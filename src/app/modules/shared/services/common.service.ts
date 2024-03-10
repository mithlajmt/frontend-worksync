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
    return this.http.get(`${this.userApi}/userData`)
  }

 
  getListData(endpoint:string){
    return this.http.get(`${this.userApi}/${endpoint}`)

  }

  postNotification(noty:any){
    return this.http.post<any>(`${this.userApi}/notification`,noty)
  }

   
}
