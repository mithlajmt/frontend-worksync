import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInComponent } from './components/check-in/check-in.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { SharedModule } from '../shared/shared.module';
import { WebcamModule } from 'ngx-webcam';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CheckInComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    WebcamModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    EmployeeComponent
  ]
})
export class EmployeeModule { }
