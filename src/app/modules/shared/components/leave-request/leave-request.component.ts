import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { AttendenceService } from '../../services/attendence.service';
import { ApiService } from 'src/app/modules/company/services/api.service';

interface Leave {
  title: string;
  description: string;
  leaveType: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {
  leaveFormData!:FormData;
  leaveForm!: FormGroup;
  selectedFile:any;
  leaveRequests:any[]=[]

  constructor(
    private fb: FormBuilder,
    private attendance:AttendenceService,
    ) {}

  ngOnInit() {
    this.leaveForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      description: [
        '',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200)
        ]
      ],
      range: this.fb.group({
        start: ['', Validators.required],
        end: ['', Validators.required]
      }),
    });

   this.attendance.getLeaveStatus().subscribe({
      next:(res:any)=>{
        console.log(res);
        
        this.leaveRequests = [...res?.data]   
      },
      error:(err)=>{
        console.log(err);
      }
    })


  }

  onSubmit() {
    const recievedData = this.leaveForm.value
    this.leaveFormData = new FormData()
    this.leaveFormData.append('title',recievedData.title);
    this.leaveFormData.append('description',recievedData.description);
    this.leaveFormData.append('start',recievedData.range.start);
    this.leaveFormData.append('end',recievedData.range.end);
    this.leaveFormData.append('attachment',this.selectedFile);

    this.attendance.registerLeave(this.leaveFormData).subscribe({
      next:(res)=>{
        this.leaveRequests.push(res.data)
        alert(res.message)
        this.leaveForm.reset()
        
            },
      error:(err)=>{
        console.log(err);   
      }
    })
  }


  onFileSelection(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFile = [files[0]]; // Update the selectedFile array
    } else {
      alert('YOU CAN CHOOSE ONLY ONE FILE');
    }
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

    toggleExpand(request: any): void {
      request.expanded = !request.expanded; // Toggle the expanded state
    }
    
}
