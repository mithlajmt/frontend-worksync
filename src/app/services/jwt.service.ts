import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('Token');
  }
}
