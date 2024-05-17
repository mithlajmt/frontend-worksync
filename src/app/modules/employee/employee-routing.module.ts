import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../public/components/notfound/notfound.component';
import { EmployeeComponent } from './employee.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { AttendencecalenderComponent } from '../shared/components/attendencecalender/attendencecalender.component';
import { LeaveRequestComponent } from '../shared/components/leave-request/leave-request.component';
import { ComplaintsComponent } from '../shared/components/complaints/complaints.component';
import { TodoComponent } from '../shared/components/todo/todo.component';
import { ProfileFormComponent } from '../shared/components/profile-form/profile-form.component';
import { ChatSessionComponent } from '../shared/components/chat-session/chat-session.component';
import { EmployeeGuard } from 'src/app/guards/employee.guard';
import { FeaturespageComponent } from '../public/components/publichomepage/landingpage/featurespage/featurespage.component';
import { SupportComponent } from '../shared/components/support/support.component';
import { ShoweventsComponent } from '../shared/components/showevents/showevents.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    canActivateChild:[EmployeeGuard],
    children: [
      { path: '', redirectTo: 'checkIn', pathMatch: 'full' },
      { path: 'checkIn', component: CheckInComponent },
      { path: 'attendance', component: AttendencecalenderComponent },
      { path: 'leaveRequest', component: LeaveRequestComponent },
      { path: 'complaints', component: ComplaintsComponent },
      { path: 'todo', component: TodoComponent },
      {path:'profile',component:ProfileFormComponent},
      {path:'Messages',component:ChatSessionComponent},
      { path: 'about', component:FeaturespageComponent},
      { path: 'support', component:SupportComponent},
      { path: 'notifications', component:ShoweventsComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    EmployeeGuard
  ]
})
export class EmployeeRoutingModule { }
