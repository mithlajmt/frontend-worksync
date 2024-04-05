import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

    // const token = localStorage.getItem("authToken");
    this.socket.on('welcome', (data: any) => {
      console.log( );
      
      // this.socket.emit('token',token )
      console.log('Received request:', data);
    });
  }  

  onSend(data:any) {
    
    const token = localStorage.getItem("authToken");
    const packet={...data};
    packet.token=token
    this.socket.emit('onMessageSend',packet)

}



getPreviuosMessages(reciever:string):Observable<any> {
  return this.http.get(`http://localhost:4000/messages/${reciever}`)
}


getmessage(): Observable<any> {
  return new Observable<any>(observer => {
    this.socket.on('getmessage', (res) => {
      console.log(res, 'kilo');
      observer.next(res);
    });
  });
}
}


