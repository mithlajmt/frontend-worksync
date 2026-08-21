import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtService } from "./jwt.service";
import { Router } from "@angular/router";

@Injectable(
    {providedIn:'root'}
)

export class userData{

   constructor(
      private http:HttpClient,
      private jwt:JwtService,
      private router:Router,
   ){}


  private _role: string = '';

  get role(): string {
    if (this._role) {
      return this._role;
    }
    const token = localStorage.getItem('yourToken');
    if (!token) return '';
    const decoded = this.jwt.decodeToken(token);
    return decoded?.role || '';
  }

  set role(val: string) {
    this._role = val;
  }

  get token(): string | null {
    return localStorage.getItem('yourToken');
  }

  get decodedToken(): any {
    const token = this.token;
    return token ? this.jwt.decodeToken(token) : null;
  }

  isLoggedIn() {
    if (!this.token) {
      return true;
    } else {
      this.router.navigate([`/${this.role}`]);
      return false;
    }
  }

  isEmployee() {
    return this.role === 'employee' || this.role === 'departmentHead' || this.role === 'intern';
  }

  isDepartmentHead() {
    return this.role === 'departmentHead';
  }

  isCompanyAdmin() {
    return this.role === 'companyAdmin';
  }
}
