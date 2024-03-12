import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentheadRoutingModule } from './departmenthead-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DepartmentheadComponent } from './departmenthead.component';
import { DepartmentStatiscticsComponent } from './components/department-statisctics/department-statisctics.component';
import { HttpClientModule } from '@angular/common/http';
import { ApproveComplaintsComponent } from './components/approve-complaints/approve-complaints.component';


@NgModule({
  declarations: [
    DepartmentheadComponent,
    DepartmentStatiscticsComponent,
    ApproveComplaintsComponent
  ],
  imports: [
    CommonModule,
    DepartmentheadRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  exports:[DepartmentStatiscticsComponent,ApproveComplaintsComponent]
})
export class DepartmentheadModule { }
