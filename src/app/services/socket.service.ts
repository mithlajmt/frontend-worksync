import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  public socket!: Socket;
  private messageSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.socket = io(environment.apiUrl);

    this.socket.on('connect', () => {
      this.registerOnlineStatus();
    });

    this.registerOnlineStatus();
    this.setupListeners();
  }

  registerOnlineStatus() {
    const token = localStorage.getItem('yourToken');
    if (token) {
      this.socket.emit('setUserID', token);
    }
  }

  setupListeners() {
    this.socket.on('welcome', (data: any) => {
      console.log('Socket welcome:', data);
    });

    this.socket.on('sentedMessage', (res: any) => {
      this.messageSubject.next(res);
    });
  }

  welcomer() {
    this.registerOnlineStatus();
  }

  onSend(data: any) {
    const token = localStorage.getItem('yourToken');
    const packet = { ...data, token };
    this.socket.emit('onMessageSend', packet);

    return new Observable<any>((observer) => {
      const handler = (res: any) => {
        observer.next(res);
        observer.complete();
      };
      this.socket.once('sentedMessage', handler);
    });
  }

  getMessageObservable(): Observable<any> {
    return this.messageSubject.asObservable();
  }

  getPreviuosMessages(reciever: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/messages/${reciever}`);
  }
}




