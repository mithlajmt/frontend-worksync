import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/publichomepage/landingpage/landingpage.component';
import { SignupComponent } from './components/authorisation/signup/signup.component';
import { AuthguardService } from 'src/app/services/authguard.service';
import { LoginComponent } from './components/authorisation/login/login.component';
import { DashboardComponent } from '../company/components/dashboard/dashboard/dashboard.component';
import { EmployeeformComponent } from '../company/components/employee/employeeform/employeeform.component';
import { companyComponent } from '../company/company.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent }, // Redirect root path to 'homepage'
  { path: 'signup', component: SignupComponent , canDeactivate:[(comp:SignupComponent)=>{return comp.canExit()}]}, // Route for /signup path
  { path: 'login', component: LoginComponent ,}, // Route for /signup path
  {
    path: 'company',
    component: companyComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {path:'employee',component:EmployeeformComponent}
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
