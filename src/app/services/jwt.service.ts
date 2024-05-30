import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
// import { LocalStorage } from '@angular/common';




@Injectable({
  providedIn: 'root'
})
export class JwtService {
  setToken(token: string) {
    localStorage.setItem('yourToken',token)
  }

  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('yourToken');
  }

  deleteToken(){
    localStorage.clear()
  }

  decodeToken(token:any):any{
    try{
      return jwtDecode(token);
    }catch(error){
      console.error('error decoding token:',error);
      return null
    }
  }
}
