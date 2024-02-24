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
import { DepartmentsComponent } from './components/departments/departments.component';
import { EditEmployeeDataComponent } from './components/employee/edit-employee-data/edit-employee-data.component';





@NgModule({
  declarations: [
    EmployeeformComponent,
    EmployeelistComponent,
    companyComponent,
    DashboardComponent,
    DepartmentsComponent,
    EditEmployeeDataComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CompanyRoutingModule,
    SharedModule,
    CompanyRoutingModule,


  ],
  exports:[
    companyComponent,
    DashboardComponent,
    EmployeeformComponent,
    EmployeelistComponent,
    EditEmployeeDataComponent,
  ]
})
export class CompanyModule { }
