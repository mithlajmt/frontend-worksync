import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {
  constructor( private http:HttpClient) { }

  private userapi = 'http://localhost:4000/attendance';

  postattendence(photo:any,action:string){
    console.log(action);
    
    return this.http.post<any>(`${this.userapi}/${action}`,photo);
  }

  getAttendence(){
    return this.http.get<any>(`${this.userapi}/status`);
  }

  attandanceCalendar(){
    return this.http.get<any>(`${this.userapi}/type`);
  }


}
