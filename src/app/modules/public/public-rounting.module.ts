import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/publichomepage/landingpage/landingpage.component';
import { SignupComponent } from './components/authorisation/signup/signup.component';
import { AuthguardService } from 'src/app/services/authguard.service';
import { LoginComponent } from './components/authorisation/login/login.component';
import { DashboardComponent } from '../company/components/dashboard/dashboard/dashboard.component';
import { EmployeeformComponent } from '../company/components/employee/employeeform/employeeform.component';
import { companyComponent } from '../company/company.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DepartmentsComponent } from '../company/components/departments/departments.component';
import { LoggedAuthGuard } from 'src/app/guards/LoggedIn.guard';


const routes: Routes = [
  { path: '',
  component: LandingpageComponent,
  canActivate: [LoggedAuthGuard],
},
  { path: 'login',
   component: LoginComponent ,
   canActivate: [LoggedAuthGuard],
  }, 
  { 
    path: 'signup',
    component: SignupComponent,
    canActivate: [LoggedAuthGuard],
    canDeactivate:[(comp:SignupComponent)=>{return comp.canExit()}], // Route for /signup path
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
