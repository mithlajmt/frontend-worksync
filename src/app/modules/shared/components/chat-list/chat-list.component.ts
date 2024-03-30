import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  @Output() selectedContact=new EventEmitter()
  contacts:any[]=[]
  constructor(
    private common:CommonService,
    private route:ActivatedRoute,
    private router:Router,
    
    ){

  }

  ngOnInit(): void {

    // const currentUrl = this.router.url
    // const urlParts = currentUrl.split('/')
    this.common.getchatList().subscribe({
      next:(res:any)=>{
                // console.log(res);
                this.contacts = [...res.data]                
      },
      error:(Err)=>{

      }
    })
  }


  onContactClick(id:number){
    this.selectedContact.emit(id)
  }

}
