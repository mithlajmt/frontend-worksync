import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentheadRoutingModule } from './departmenthead-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DepartmentheadComponent } from './departmenthead.component';
import { DepartmentStatiscticsComponent } from './components/department-statisctics/department-statisctics.component';
import { HttpClientModule } from '@angular/common/http';
import { ApproveComplaintsComponent } from './components/approve-complaints/approve-complaints.component';
import { MatIconModule } from '@angular/material/icon';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { LeadsComponent } from './components/leads/leads.component';


@NgModule({
  declarations: [
    DepartmentheadComponent,
    DepartmentStatiscticsComponent,
    ApproveComplaintsComponent,
    TaskCreateComponent,
    LeadsComponent
  ],
  imports: [
    CommonModule,
    DepartmentheadRoutingModule,
    SharedModule,
    HttpClientModule,
    MatIconModule,

  ],
  exports:[DepartmentStatiscticsComponent,ApproveComplaintsComponent]
})
export class DepartmentheadModule { }
