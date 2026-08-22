// chat-session.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-chat-session',
  templateUrl: './chat-session.component.html',
  styleUrls: ['./chat-session.component.css']
})
export class ChatSessionComponent implements OnInit, OnDestroy {
  inputMessage: string = '';
  showChat = false;
  profileData: any;
  previousMessage: any[] = [];
  userID: any = '';
  private socketSub!: Subscription;

  constructor(
    private socketS: SocketService,
    private common: CommonService
  ) { }

  isOwnMessage(senderID: string | number) {
    return String(this.userID) === String(senderID);
  }

  ngOnInit(): void {
    this.common.getUsernameAndProfile().subscribe({
      next: (res) => {
        if (res && res.data && res.data[0]) {
          this.userID = res.data[0]._id;
        }
      },
      error: (err) => {
        console.error('Error fetching user profile info:', err);
      }
    });

    this.socketS.welcomer();

    // Subscribe to real-time incoming messages stream
    this.socketSub = this.socketS.getMessageObservable().subscribe({
      next: (msg: any) => {
        if (!msg) return;

        const isRelevant = this.profileData && (
          String(msg.sender) === String(this.profileData._id) ||
          String(msg.receiver) === String(this.profileData._id) ||
          String(msg.reciever) === String(this.profileData._id) ||
          String(msg.sender) === String(this.userID)
        );

        if (isRelevant) {
          const exists = this.previousMessage.some(prevMsg => prevMsg._id && msg._id && prevMsg._id === msg._id);
          if (!exists) {
            this.previousMessage.push(msg);
            this.scrollToBottom();
          }
        }
      },
      error: (err) => {
        console.error('Socket message stream error:', err);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.socketSub) {
      this.socketSub.unsubscribe();
    }
  }

  onTyping() {
    // Optional typing indicator listener
  }

  selectedChat(event: any) {
    this.showChat = true;
    this.profileData = event;
    this.socketS.getPreviuosMessages(this.profileData._id).subscribe({
      next: (res) => {
        this.previousMessage = res.data || [];
        this.scrollToBottom();
      },
      error: (err) => {
        console.error('Error fetching messages:', err);
      }
    });
  }

  onMessageSent() {
    if (!this.inputMessage || !this.inputMessage.trim() || !this.profileData) {
      return;
    }

    const data = {
      reciever: this.profileData._id,
      receiver: this.profileData._id,
      message: this.inputMessage.trim()
    };

    this.socketS.onSend(data);
    this.inputMessage = '';
  }

  private scrollToBottom() {
    setTimeout(() => {
      const el = document.getElementById('messages');
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }, 50);
  }
}

