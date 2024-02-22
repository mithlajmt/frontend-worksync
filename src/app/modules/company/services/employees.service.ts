import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './../../public/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private http:HttpClient,
    private api:ApiService,
  ) { }
}
