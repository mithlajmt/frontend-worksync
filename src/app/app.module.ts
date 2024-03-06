import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './modules/public/public.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CompanyModule } from './modules/company/company.module';
import { AuthInterceptor } from './services/AuthInterceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { FormsModule } from '@angular/forms';
// import { WebcamModule } from 'ngx-webcam';


PublicModule
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CompanyModule,
    BrowserAnimationsModule,
    SharedModule,
    EmployeeModule,
    FormsModule,
    // WebcamModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
