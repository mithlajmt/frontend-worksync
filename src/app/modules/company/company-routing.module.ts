import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './components/employee/employeeform/employeeform.component';
import { companyComponent } from './company.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DepartmentsComponent } from './components/departments/departments.component';

const routes: Routes = [
    {
      path: 'company',
      component: DashboardComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        {path:'employee',component:EmployeeformComponent},
        {path:'departments',component:DepartmentsComponent}
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CompanyRoutingModule {}
  