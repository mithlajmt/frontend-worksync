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


    role:string=''
    token = localStorage.getItem('yourToken')
    decodedToken:any= this.jwt.decodeToken(this.token);



 isLoggedIn() {
   if(!this.token){
      return true;
   }
   else{
      this.router.navigate([`/${this.role}`])
      return false;
   }

  }

  isEmployee() {
   const type = this.role ? this.role === 'employee':false;
   return type
  }

  isDepartmentHead() {
   return this.role ? this.decodedToken.role==='departmentHead':false;

  }

  isCompanyAdmin() {
   return this.role ? this.decodedToken.role==='companyAdmin':false;
}


}
