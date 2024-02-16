import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './modules/public/public.module';
import { CompanyRoutingModule } from './modules/company/company-routing.module';



const routes: Routes = [
  { path: '', loadChildren: () => import('../app/modules/public/public.module').then(m => m.PublicModule) },
  { path: 'company', loadChildren: () => CompanyRoutingModule },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
