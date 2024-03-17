import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeformComponent } from './components/employee/employeeform/employeeform.component';
import { companyComponent } from './company.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { NotificationsComponent } from '../departmenthead/components/notifications/notifications.component';
import { TodoComponent } from '../shared/components/todo/todo.component';
import { EmployeelistComponent } from './components/employee/employeelist/employeelist.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { ApproveComplaintsComponent } from '../departmenthead/components/approve-complaints/approve-complaints.component';

const routes: Routes = [
  {
    path: '',
    component: companyComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeelistComponent },
      { path: 'addemployee', component: EmployeeformComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'departments/:id', component: DepartmentDetailsComponent },
      { path: 'departments/:id/employee', component: EmployeeformComponent },
      { path: 'notifications', component: NotificationsComponent },
      {path: 'complaintsList',component:ApproveComplaintsComponent},
      { path: 'todo', component: TodoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
