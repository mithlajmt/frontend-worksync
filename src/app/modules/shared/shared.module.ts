import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/sidebar/toolbar/toolbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    TopbarComponent,
    NotificationsComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[TopbarComponent,ToolbarComponent,NotificationsComponent]
})
export class SharedModule { }
