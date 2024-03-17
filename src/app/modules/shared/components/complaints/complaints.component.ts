import { Component } from '@angular/core';
import { ComplaintsService } from '../../services/complaints.service';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
  // providers: [provideNativeDateAdapter()],
})
export class ComplaintsComponent {
  complaint = {
    title: '',
    description: '',
    to: '',
    attachment: null
  };

  complaintForm!:FormData;
  selectedFile:any;


  constructor(
    private complaints: ComplaintsService,
    // private privater:privateN
    ){}

  onAttachmentChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFile = [files[0]]; // Update the selectedFile array
      
    } else {
      alert('YOU CAN CHOOSE ONLY ONE FILE');
    }
  }

  submitComplaint() {
    this.complaintForm = new FormData()
    this.complaintForm.append('title',this.complaint.title);
    this.complaintForm.append('description',this.complaint.description);
    this.complaintForm.append('recipient',this.complaint.to);
    this.complaintForm.append('attachment',this.selectedFile[0]);

    this.complaints.registerComplaint(this.complaintForm).subscribe({
      next:(res)=>{
        console.log(res);  
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    }

}
