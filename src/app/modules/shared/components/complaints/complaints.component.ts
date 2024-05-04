import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../../services/complaints.service';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
  // providers: [provideNativeDateAdapter()],
})
export class ComplaintsComponent implements OnInit {

  complaintsData:any

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

  ngOnInit(): void {
    this.complaints.getComplaints().subscribe({
      next:(res:any)=>{
        this.complaintsData=res.data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


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
      next:(res:any)=>{
        console.log(res);  
        alert(res.message)
        this.complaints.getComplaints().subscribe({
          next:(res:any)=>{
            this.complaintsData=res.data
          },
          error:(err)=>{
            console.log(err);
          }
        })
      },
      error:(err)=>{
        console.log(err);
        alert(err.error.message)

        
      }
    })
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
    
    toggleExpand(complaint:any) {
      complaint.expanded = !complaint.expanded;
  }
}
