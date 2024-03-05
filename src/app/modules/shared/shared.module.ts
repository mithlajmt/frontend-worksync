import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/sidebar/toolbar/toolbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { CameraComponent } from './components/camera/camera.component';
import { WebcamModule } from 'ngx-webcam';
import { AttendencecalenderComponent } from './components/attendencecalender/attendencecalender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    ToolbarComponent,
    TopbarComponent,
    NotificationsComponent,
    TodoComponent,
    ConfirmationDialogComponent,
    CameraComponent,
    AttendencecalenderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    WebcamModule,
    FullCalendarModule,


  ],
  exports:[TopbarComponent,ToolbarComponent,NotificationsComponent,ConfirmationDialogComponent,CameraComponent,AttendencecalenderComponent],
  providers: [DatePipe]
})
export class SharedModule { }
