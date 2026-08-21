import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { WebcamImage } from 'ngx-webcam';
import { AttendenceService } from 'src/app/modules/shared/services/attendence.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state('initial', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.1)' })),
      transition('initial => hovered', animate('300ms ease-in-out')),
      transition('hovered => initial', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CheckInComponent implements OnInit, OnDestroy {
  public hoverState = 'initial';
  checkButVisibility: boolean = true;
  cameraVisibility: boolean = false;
  checkedIn: boolean = false;
  alreadyCheckedOut: boolean = false;
  logType: string = 'checkIN';
  checkInTime: string = '';
  checkOutTime: string = '';

  currentTime: string = '';
  currentDateStr: string = '';
  private clockTimer: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private attendance: AttendenceService
  ) {}

  ngOnInit(): void {
    this.updateClock();
    this.clockTimer = setInterval(() => this.updateClock(), 1000);
    this.fetchStatus();
  }

  ngOnDestroy(): void {
    if (this.clockTimer) {
      clearInterval(this.clockTimer);
    }
  }

  updateClock(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    this.currentDateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
    this.cdr.detectChanges();
  }

  fetchStatus(): void {
    this.attendance.getAttendence().subscribe({
      next: (res: any) => {
        console.log('Attendance status:', res);
        this.checkInTime = res.checkInTime || '';
        this.checkOutTime = res.checkOutTime || '';
        if (res.checkedIn) {
          this.checkedIn = true;
          this.alreadyCheckedOut = false;
          this.logType = 'checkOut';
        } else if (res.alreadyCheckedOut) {
          this.checkedIn = false;
          this.alreadyCheckedOut = true;
          this.logType = 'checkIN';
        } else {
          this.checkedIn = false;
          this.alreadyCheckedOut = false;
          this.logType = 'checkIN';
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  public onHover(): void {
    this.hoverState = 'hovered';
  }

  public onLeave(): void {
    this.hoverState = 'initial';
  }

  webcamImage: WebcamImage | undefined;

  handleImage(webcamImage: WebcamImage | any) {
    this.webcamImage = webcamImage;
  }

  handleResponse(res: any) {
    this.cameraVisibility = false;
    this.checkButVisibility = true;

    if (res.success) {
      const isCheckOut = this.logType === 'checkOut';
      const successMsg = isCheckOut ? 'Checked Out Successfully!' : 'Checked In Successfully!';

      setTimeout(() => {
        alert(successMsg);
        this.fetchStatus();
      }, 300);
    } else {
      const msg = res.error?.message || res.error?.reason || res.message || 'Attendance request failed';
      setTimeout(() => {
        alert(msg);
        this.fetchStatus();
      }, 300);
    }
  }

  onCheckIn() {
    this.logType = 'checkIN';
    this.checkButVisibility = false;
    this.cameraVisibility = true;
  }

  onCheckOut() {
    this.logType = 'checkOut';
    this.checkButVisibility = false;
    this.cameraVisibility = true;
  }
}
