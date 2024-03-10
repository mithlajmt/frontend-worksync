import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/modules/shared/services/common.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class  NotificationsComponent implements OnInit {
  eventForm!:FormGroup;
  formData!:FormData
  selectedDepartments:string[]=[] 
  selectedFile:any;

  api:string='departmentNames'

 

  departments = [
    { name: 'Department 1', value: 'department1' },
    { name: 'Department 2', value: 'department2' },
  ];

  target = [
    { name: 'ALL EMPLOYEES', value: 'ALL' },
    { name: 'departmentHead', value: 'departmentHead' },
  ];
  

  dep:any[]=[];

  constructor(
    private fb: FormBuilder,
    private serv:CommonService,
    ) {}

  ngOnInit(): void {
    // Initialize the form group with form controls and validators
    this.eventForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      range:this.fb.group({
        start:['',Validators.required],
        end:[''],
      }) ,
      description: ['', [Validators.required, Validators.minLength(10)]],
      target: ['', [Validators.required]],
      recipients: ['', [Validators.required]],
      eventType:['',Validators.required]
    });
  }


  handleSelectedDepartment(event:any){
    this.selectedDepartments = [...event]
    // console.log(this.selectedDepartments,);   //eg:   ['minu', 'sales accomodation']
    this.eventForm.patchValue({
    recipients:this.selectedDepartments
    })
    
  }

  createEvent(): void {  //onSubmit()
    this.formData = new FormData();
    const data = this.eventForm.value
    // console.log(this.eventForm.value);
    this.formData.append('title', data.title);
    this.formData.append('start', data.range.start);
    this.formData.append('end', data.range.end);
    this.formData.append('description', data.description);
    this.formData.append('target', data.target);
    this.formData.append('recipients', data.recipients);
    this.formData.append('eventType', data.eventType);
    this.formData.append('attachment',this.selectedFile);

    this.serv.postNotification(this.formData).subscribe({
      next:(res)=>{
        console.log(res);
        this.eventForm.reset();
      },
      error:(err)=>{
        console.log(err);
        
      }
        })
    // Reset the form after submission if needed
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


