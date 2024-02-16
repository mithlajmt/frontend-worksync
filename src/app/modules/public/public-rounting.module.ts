import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/publichomepage/landingpage/landingpage.component';
import { SignupComponent } from './components/authorisation/signup/signup.component';
import { AuthguardService } from 'src/app/services/authguard.service';


const routes: Routes = [
  { path: '', component: LandingpageComponent }, // Redirect root path to 'homepage'
  { path: 'signup', component: SignupComponent , canDeactivate:[(comp:SignupComponent)=>{return comp.canExit()}]} // Route for /signup path
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
