import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { userData } from "../services/userData.service";

@Injectable({
  providedIn: 'root'
})
export class companyAuthGuard implements CanActivateChild {

  constructor(private userDataService: userData, private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isCompanyAdmin = this.userDataService.isCompanyAdmin();
    
    if (isCompanyAdmin) {
      return true;
    } else {
      this.router.navigate(['/restricted']);
      return false;
    }
  }
}
