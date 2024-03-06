import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../public/components/notfound/notfound.component';
import { EmployeeComponent } from './employee.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { AttendencecalenderComponent } from '../shared/components/attendencecalender/attendencecalender.component';
import { LeaveRequestComponent } from '../shared/components/leave-request/leave-request.component';
import { ComplaintsComponent } from '../shared/components/complaints/complaints.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: '', redirectTo: 'checkIn', pathMatch: 'full' },
      { path: 'checkIn', component: CheckInComponent },
      { path: 'Attendance', component: AttendencecalenderComponent },
      { path: 'leaveRequest', component: LeaveRequestComponent },
      { path: 'complaints', component: ComplaintsComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
