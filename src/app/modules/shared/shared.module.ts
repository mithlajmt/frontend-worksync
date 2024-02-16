import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/sidebar/toolbar/toolbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToolbarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[TopbarComponent,ToolbarComponent]
})
export class SharedModule { }
