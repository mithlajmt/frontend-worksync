import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './components/employee/employeeform/employeeform.component';
import { companyComponent } from './company.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { NotificationsComponent } from '../shared/components/notifications/notifications.component';

const routes: Routes = [
    {
      path: 'company',
      component:companyComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        {path:'employee',component:EmployeeformComponent},
        {path:'departments',component:DepartmentsComponent},
        {path:'notifications',component:NotificationsComponent}
        
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CompanyRoutingModule {}
  