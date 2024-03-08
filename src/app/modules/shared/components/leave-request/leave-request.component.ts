import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { AttendenceService } from '../../services/attendence.service';

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
        console.log(res);
        
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
}
