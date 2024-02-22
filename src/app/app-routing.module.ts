import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './modules/public/public.module';
import { CompanyRoutingModule } from './modules/company/company-routing.module';
import { NotfoundComponent } from './modules/public/components/notfound/notfound.component';



const routes: Routes = [
  { path: '', loadChildren: () => import('../app/modules/public/public.module').then(m => m.PublicModule) },
  // { path: 'company', loadChildren: () => CompanyRoutingModule },
  {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
