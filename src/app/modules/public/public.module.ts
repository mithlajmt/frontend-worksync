import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './components/publichomepage/landingpage/landingpage.component';
import { NavbarComponent } from './components/publichomepage/landingpage/navbar/navbar.component';
import { FirstpageComponent } from './components/publichomepage/landingpage/firstpage/firstpage.component';
import { FeaturespageComponent } from './components/publichomepage/landingpage/featurespage/featurespage.component';
import { ThirdpageComponent } from './components/publichomepage/landingpage/thirdpage/thirdpage.component';
import { FooterComponent } from './components/publichomepage/landingpage/footer/footer.component';
import { LoginComponent } from './components/authorisation/login/login.component';
import { PublicRoutingModule } from './public-rounting.module';
import { SignupComponent } from './components/authorisation/signup/signup.component';
import { PublicviewComponent } from './components/publicview/publicview.component';
import { VerificationOtpComponent } from './components/authorisation/verification-otp/verification-otp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { companyComponent } from '../company/company.component';
import { CompanyModule } from '../company/company.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
VerificationOtpComponent
@NgModule({
  declarations: [
    LandingpageComponent,
    NavbarComponent,
    FirstpageComponent,
    FeaturespageComponent,
    ThirdpageComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    PublicviewComponent,
    VerificationOtpComponent,
    NotfoundComponent

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CompanyModule

  ],
  exports: [LandingpageComponent,NotfoundComponent] 

})
export class PublicModule { }
