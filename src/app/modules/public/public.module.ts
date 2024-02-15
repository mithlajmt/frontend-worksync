import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './components/publichomepage/landingpage/landingpage.component';
import { NavbarComponent } from './components/publichomepage/landingpage/navbar/navbar.component';
import { FirstpageComponent } from './components/publichomepage/landingpage/firstpage/firstpage.component';
import { FeaturespageComponent } from './components/publichomepage/landingpage/featurespage/featurespage.component';
import { ThirdpageComponent } from './components/publichomepage/landingpage/thirdpage/thirdpage.component';
import { FooterComponent } from './components/publichomepage/landingpage/footer/footer.component';



@NgModule({
  declarations: [
    LandingpageComponent,
    NavbarComponent,
    FirstpageComponent,
    FeaturespageComponent,
    ThirdpageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LandingpageComponent] 

})
export class PublicModule { }
