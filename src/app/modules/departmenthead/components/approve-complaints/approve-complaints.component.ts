import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ApiutitilityService } from '../../services/apiUtitility.service';

@Component({
  selector: 'app-approve-complaints',
  templateUrl: './approve-complaints.component.html',
  styleUrls: ['./approve-complaints.component.css']
})
export class ApproveComplaintsComponent implements OnInit {
  constructor(
    private api:ApiutitilityService,
  )
  {}
  ngOnInit(): void {
    this.api.getComplaintsList().subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }


}
