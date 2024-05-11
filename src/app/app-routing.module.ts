import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './modules/public/components/notfound/notfound.component';
import { LoggedAuthGuard } from './guards/LoggedIn.guard';



const routes: Routes = [
  {
    path: '', 
    // component: PublicComponent,
    children: [
      { path: '',
       loadChildren: () => import('../app/modules/public/public.module').then(m => m.PublicModule) },
      { path: 'companyAdmin', loadChildren: () => import('../app/modules/company/company.module').then(m => m.CompanyModule) },
      { path: 'employee', loadChildren: () => import('../app/modules/employee/employee.module').then(m => m.EmployeeModule) },
      { path: 'departmentHead', loadChildren: () => import('../app/modules/departmenthead/departmenthead.module').then(m => m.DepartmentheadModule) },
      {path:'**',component:NotfoundComponent}
    ]
  }
  
];

// this.router.url === '/' || this.router.url === '/login'

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
