import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';


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

  deleteToken(){
    localStorage.clear()
  }

  decodeToken(token:string):any{
    try{
      return jwtDecode(token);
    }catch(error){
      console.error('error decoding token:',error);
      return null
    }
  }
}
