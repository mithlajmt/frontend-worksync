import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { userData } from "../services/userData.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private userDataService: userData, private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userDat = this.userDataService.role === 'departmentHead';
    
    if (userDat) {
      return true;
    } else {
      this.router.navigate(['/restricted']);
      return false;
    }
  }
}
