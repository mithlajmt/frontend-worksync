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

  geeUserDetails(){
    return this.http.get(`${this.userApi}/userData`)
  }


   
}
