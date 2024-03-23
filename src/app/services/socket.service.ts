import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  public socket!: Socket;

  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:5000');
  }

  welcomer() {
    this.socket.on('welcome', (data: any) => {
      console.log('Received request:', data);
    });
  }  

  onSend(msg:string) {
    this.socket.emit('onMessageSend',msg)
}
}
