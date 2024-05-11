import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { userData } from '../services/userData.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})


export class EmployeeGuard implements CanActivateChild {

    constructor(
        private router:Router,
        private user:userData
    ){}

    canActivateChild():boolean | any {
        const userRole = this.user.isEmployee()

        if(userRole ){
          
            return true;
        }else{
            this.router.navigate(['/forbidden']);
            return false
        }

    }
}