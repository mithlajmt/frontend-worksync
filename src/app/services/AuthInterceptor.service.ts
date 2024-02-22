import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { JwtService } from './jwt.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService:JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getTokenFromLocalStorage();
    
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
