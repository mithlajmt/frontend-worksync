import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
export class CheckInComponent implements OnInit {
  public hoverState = 'initial';
  checkButVisibility: boolean = true;
  cameraVisibility: boolean = false;
  completeLoaded: boolean = false;
  checkedIn: boolean = false;
  logType:string='checkIN'

  constructor(
    private cdr: ChangeDetectorRef,
    private attendance:AttendenceService
    ) {}

  ngOnInit(): void {
    this.attendance.getAttendence().subscribe({
      next:(res)=>{
        console.log(res);
        if(res.checkedIn){
          this.logType='checkOut'
          this.checkedIn = true;
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
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
      this.checkedIn = true;
      // this.cdr.detectChanges(); // Trigger change detection
      console.log(res);
    } else {
      console.log(res, 'jijiiji');
    }
  }

  onCheckIn() {
    this.checkButVisibility = false;
    this.cameraVisibility = true;
  }

  onCheckOut() {
    this.checkButVisibility = false;
    this.cameraVisibility = true;

  }
}
