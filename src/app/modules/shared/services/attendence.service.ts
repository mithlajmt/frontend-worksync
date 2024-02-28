import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {
  constructor( private http:HttpClient) { }

  private userapi = 'http://localhost:4000';

  postattendence(photo:any){
    return this.http.post<any>(`${this.userapi}/company/attendence`,photo)
  }


}
