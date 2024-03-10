import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit{
  @Output() getDates:EventEmitter<any>=new EventEmitter<any>();
  range!:FormGroup
  show=false
  constructor(private fb:FormBuilder){}

  onDateSelection(){
    this.getDates.emit(this.range.value)
  }
  

  ngOnInit(): void {
    this.show=true
    this.range=this.fb.group({
      start:['',Validators.required],
      end:['',Validators.required],
    })
  }
}
