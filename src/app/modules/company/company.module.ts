import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeformComponent } from './components/employee/employeeform/employeeform.component';
import { EmployeelistComponent } from './components/employee/employeelist/employeelist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { companyComponent } from './company.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EmployeeformComponent,
    EmployeelistComponent,
    companyComponent,
    DashboardComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
