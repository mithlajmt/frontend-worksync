// chat-session.component.ts
import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat-session',
  templateUrl: './chat-session.component.html',
  styleUrls: ['./chat-session.component.css']
})
export class ChatSessionComponent implements OnInit {

  constructor(private socketS: SocketService) { }
  inputMessage:string=''

  ngOnInit(): void {
    this.socketS.welcomer(); // Call the welcomer method to listen for 'welcome' event
  }

  onTyping(){
    // console.log(this.InputMessage);  
  }



  emitThatShit() {
    this.socketS.onSend(this.inputMessage)
  }
}
