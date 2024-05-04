import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ApiutitilityService } from '../../services/apiUtitility.service';
import { companyComponent } from 'src/app/modules/company/company.component';

@Component({
  selector: 'app-approve-complaints',
  templateUrl: './approve-complaints.component.html',
  styleUrls: ['./approve-complaints.component.css']
})
export class ApproveComplaintsComponent implements OnInit {
  complaints:any;
  constructor(
    private api:ApiutitilityService,
  )
  {}
  ngOnInit(): void {
    this.api.getComplaintsList().subscribe({
      next:(res:any)=>{
        this.complaints=res.data
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  toggleExpand(complaint:any) {
    complaint.expanded = !complaint.expanded;
}

getStatusColor(status: string) {

  switch (status.toLowerCase()) {
    case 'pending':
      return { color: 'green' };
    case 'closed':
      return { color: 'red' };
    case 'inaction':
      return { color: 'yellow' };
    default:
      return {};
  }
}


onInvestigate(id:string){
    this.api.updateComplaint(id,'inAction').subscribe({
    next:(res)=>{
      this.complaints.map((res:any)=>{
        if(res._id==id){
          res.status='inAction';
        }
      })      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })

}

onCaseClose(id:string){
  this.api.updateComplaint(id,'closed').subscribe({
    next:(res)=>{
      this.complaints.map((res:any)=>{
        if(res._id==id){
          res.status='closed';
        }
      })      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}




}
