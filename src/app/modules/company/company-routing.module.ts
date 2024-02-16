import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './components/employee/employeeform/employeeform.component';
import { companyComponent } from './company.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';

const routes: Routes = [
    {
      path: 'company',
      component: companyComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        {path:'employee',component:EmployeeformComponent}
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CompanyRoutingModule {}
  