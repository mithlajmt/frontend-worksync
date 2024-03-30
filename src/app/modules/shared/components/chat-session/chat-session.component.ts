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
  previousMessage = []
  // senterData = []
 

  constructor(
    private socketS: SocketService,
    private common:CommonService
    ) { }

  ngOnInit(): void {
    this.common.getUsernameAndProfile().subscribe({
      next:(res)=>{

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
        this.previousMessage=res.data[0];
        console.log(this.previousMessage)
      },

      error:(err)=>{
        console.log(err);
        
      }
    })

  }

  emitThatShit() {
    console.log(this.profileData._id)
    const data={
      reciever:this.profileData._id,
      message:this.inputMessage
    }
    this.socketS.onSend(data)
    this.inputMessage=''
    this.socketS.getmessage().subscribe((res:any) => {
      console.log(res, 'miki');
      // Do whatever you want with the response here
    });
  }

}
