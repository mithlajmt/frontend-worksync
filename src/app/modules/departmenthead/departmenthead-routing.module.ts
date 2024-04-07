import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentheadComponent } from './departmenthead.component';
import { CheckInComponent } from '../employee/components/check-in/check-in.component';
import { AttendencecalenderComponent } from '../shared/components/attendencecalender/attendencecalender.component';
import { LeaveRequestComponent } from '../shared/components/leave-request/leave-request.component';
import { ComplaintsComponent } from '../shared/components/complaints/complaints.component';
import { ChatSessionComponent } from '../shared/components/chat-session/chat-session.component';
import { ProfileFormComponent } from '../shared/components/profile-form/profile-form.component';
import { ApproveComplaintsComponent } from './components/approve-complaints/approve-complaints.component';
import { TodoComponent } from '../shared/components/todo/todo.component';
import { DepartmentDetailsComponent } from '../company/components/department-details/department-details.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { LeadsComponent } from './components/leads/leads.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentheadComponent,
    children: [
      { path: '', redirectTo: 'checkIn', pathMatch: 'full' },
      { path: 'checkIn', component: CheckInComponent },
      { path: 'attendance', component: AttendencecalenderComponent },
      { path: 'leaveRequest', component: LeaveRequestComponent },
      { path: 'complaints', component: ComplaintsComponent },
      { path: 'departments/:id', component: DepartmentDetailsComponent },
      { path: 'departments', component: DepartmentDetailsComponent },
      { path: 'complaintsList', component: ApproveComplaintsComponent  },
      { path: 'Messages', component: ChatSessionComponent },
      { path: 'profile', component: ProfileFormComponent },
      { path: 'todo', component: TodoComponent },
      { path: 'Leads', component:LeadsComponent },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentheadRoutingModule { }
