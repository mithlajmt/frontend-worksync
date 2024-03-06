import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/sidebar/toolbar/toolbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { CameraComponent } from './components/camera/camera.component';
import { WebcamModule } from 'ngx-webcam';
import { AttendencecalenderComponent } from './components/attendencecalender/attendencecalender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DatePipe } from '@angular/common';
import { LeaveRequestComponent } from './components/leave-request/leave-request.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { MatFormFieldModule } from '@angular/material/form-field';








@NgModule({
  declarations: [
    ToolbarComponent,
    TopbarComponent,
    NotificationsComponent,
    TodoComponent,
    ConfirmationDialogComponent,
    CameraComponent,
    AttendencecalenderComponent,
    LeaveRequestComponent,
    ComplaintsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    WebcamModule,
    FullCalendarModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,

  ],
  exports:[
    TopbarComponent,
    ToolbarComponent,
    NotificationsComponent,
    ConfirmationDialogComponent,
    CameraComponent,
    AttendencecalenderComponent,
    LeaveRequestComponent,
    ComplaintsComponent
  ],
  // providers: [NativeDateAdapter()],

})
export class SharedModule { }
