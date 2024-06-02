import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/sidebar/toolbar/toolbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from '../departmenthead/components/notifications/notifications.component';
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
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { ChatSessionComponent } from './components/chat-session/chat-session.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { EmployeeDataProfileComponent } from './components/employee-data-profile/employee-data-profile.component';
import { CompanyModule } from '../company/company.module';
import { LoadingComponent } from './components/loading/loading.component';
import { AboutComponent } from './components/about/about.component';
import { SupportComponent } from './components/support/support.component';
import { PublicModule } from '../public/public.module';
import { ShoweventsComponent } from './components/showevents/showevents.component';
import { EmployeeAttendanceDetaildataComponent } from './components/employee-attendance-detaildata/employee-attendance-detaildata.component';








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
    MultiselectComponent,
    DatepickerComponent,
    TableListComponent,
    NotificationListComponent,
    ChatSessionComponent,
    ProfileFormComponent,
    ChatListComponent,
    EmployeeDataProfileComponent,
    LoadingComponent,
    AboutComponent,
    SupportComponent,
    ShoweventsComponent,
    EmployeeAttendanceDetaildataComponent,
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
    MatInputModule,
    MatIconModule,
    NgMultiSelectDropDownModule,
    PublicModule,
    // CompanyModule,



  ],
  exports:[
    TopbarComponent,
    ToolbarComponent,
    NotificationsComponent,
    ConfirmationDialogComponent,
    CameraComponent,
    AttendencecalenderComponent,
    LeaveRequestComponent,
    ComplaintsComponent,
    MultiselectComponent,
    TableListComponent,
    ChatSessionComponent,
    ProfileFormComponent,
    EmployeeDataProfileComponent,
    LoadingComponent,
    AboutComponent,
    SupportComponent,
    ShoweventsComponent,
  ],
  // providers: [NativeDateAdapter()],

})
export class SharedModule { }
