import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class  NotificationsComponent implements OnInit {
  eventForm!:FormGroup;
  departments=[{
    name:'minu',
    value:'jj'
  },{
    name:'jiinu',
    value:'jj'
  }]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['']
      // Add more form controls as needed
    });
  }

  createEvent(): void {
    // Handle form submission logic here
    console.log(this.eventForm.value);
    // Reset the form after submission if needed
    this.eventForm.reset();
  }
}


