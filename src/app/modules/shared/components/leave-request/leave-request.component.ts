import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Leave {
  title: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  // Add other properties for attachments and reason if needed
}

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {


  ngOnInit(): void {
    
  }
}
