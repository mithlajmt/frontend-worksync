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
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { DepartmentheadModule } from '../departmenthead/departmenthead.module';





@NgModule({
  declarations: [
    EmployeeformComponent,
    EmployeelistComponent,
    companyComponent,
    DashboardComponent,
    DepartmentsComponent,
    EditEmployeeDataComponent,
    DepartmentDetailsComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CompanyRoutingModule,
    SharedModule,
    CompanyRoutingModule,
    DepartmentheadModule,
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
