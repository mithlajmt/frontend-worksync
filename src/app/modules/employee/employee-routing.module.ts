import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../public/components/notfound/notfound.component';
import { EmployeeComponent } from './employee.component';
import { CheckInComponent } from './components/check-in/check-in.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: '', redirectTo: 'checkIn', pathMatch: 'full' },
      { path: 'checkIn', component: CheckInComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
