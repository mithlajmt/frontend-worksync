import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.component.html',
  styleUrls: ['./approve-leave.component.css']
})
export class ApproveLeaveComponent implements OnInit {

  leaveRequests:any=[]
  requestedDates:any=[]

  constructor(
    private api :ApiService
  ){

  }

  toggleExpand(request: any): void {
    request.expanded = !request.expanded; // Toggle the expanded state
  }

  getStatusColor(status: string) {

    switch (status.toLowerCase()) {
      case 'pending':
        return { color: 'green' };
      case 'approved':
        return { color: 'red' };
      case 'declined':
        return { color: 'yellow' };
      default:
        return {};
    }
  }

  ngOnInit(): void {
    this.api.getLeaveRequests().subscribe({
      next:(res:any)=>{
        this.leaveRequests = [...res?.data]   
      console.log(this.leaveRequests);
               },
      error:(err)=>{
        console.log(err);    
      }
    })
    }


    onApprove(id:string){
      this.api.updateLeaveRequest(id,"Approved").subscribe({
        next:(res)=>{
          console.log(res);
          
        },
        error:(err)=>{

        }
      })
        }

    onDecline(id:string){
      this.api.updateLeaveRequest(id,"denied").subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:(err)=>{

        }
      })
    }

}
