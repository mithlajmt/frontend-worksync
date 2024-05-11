import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { userData } from "../services/userData.service";


@Injectable({
  providedIn: 'root'
})
export class LoggedAuthGuard implements CanActivate {
  constructor(private router: Router, private user:userData) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const token = localStorage.getItem('authToken');
    const role = this.user.role

    if (token) {
      this.router.navigate([`/${role}`]);
      return false;
    } else {
      return true;
    }
  }
}
