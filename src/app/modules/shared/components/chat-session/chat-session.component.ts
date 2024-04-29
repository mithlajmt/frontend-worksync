// chat-session.component.ts
import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-chat-session',
  templateUrl: './chat-session.component.html',
  styleUrls: ['./chat-session.component.css']
})
export class ChatSessionComponent implements OnInit {
  inputMessage:string=''
  showChat=false
  profileData:any;
  previousMessage:any[] = []
  userID:any=''
  // senterData = []
 

  constructor(
    private socketS: SocketService,
    private common:CommonService
    ) { }

    isOwnMessage(senderID:string | number){
      return this.userID == senderID ? true : false
    }

  ngOnInit(): void {
    this.common.getUsernameAndProfile().subscribe({
      next:(res)=>{
        this.userID = res.data[0]._id
        
                

            },
      error:(err)=>{
        console.log(err);
      }
    })

    this.socketS.welcomer(); // Call the welcomer method to listen for 'welcome' event
  }

  onTyping(){
    // console.log(this.InputMessage);
    
  }

  selectedChat(event:any){
    // console.log(event);
    this.showChat=true
    this.profileData=event;
    this.socketS.getPreviuosMessages(this.profileData._id).subscribe({
      next:(res)=>{
        // console.log(res);
        this.previousMessage=res.data;
        console.log(this.previousMessage)
      },

      error:(err)=>{
        console.log(err);
        
      }
    })

  }

onMessageSent() {
  const data = {
    reciever: this.profileData._id,
    message: this.inputMessage
  };

  // Subscribe to the message sent event
  const messageSubscription = this.socketS.onSend(data).subscribe({
    next: (msg) => {
      // Push the message to the previousMessage array only if it's not already there
      if (!this.previousMessage.find(prevMsg => prevMsg._id === msg._id)) {
        this.previousMessage.push(msg);
        window.scrollTo(0, document.body.scrollHeight);
      }
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      // Unsubscribe from the subscription to avoid memory leaks
      messageSubscription.unsubscribe();
    }
  });

  // Clear the input message after sending
  this.inputMessage = '';
}


}
