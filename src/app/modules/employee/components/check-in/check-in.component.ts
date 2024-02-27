import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { WebcamImage } from 'ngx-webcam';


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
export class CheckInComponent implements OnInit{

  public hoverState = 'initial';
  checkButVisibility:boolean=true
  cameraVisibility:boolean=false
  completeLoaded:boolean=false


  ngOnInit(): void {

  }



  public onHover(): void {
    this.hoverState = 'hovered';
  }

  public onLeave(): void {
    this.hoverState = 'initial';
  }

  webcamImage:WebcamImage | undefined;

  handleImage(webcamImage: WebcamImage | any){
    this.webcamImage=webcamImage
  }

  onCheckIn(){
    this.checkButVisibility=false
    this.cameraVisibility=true 
  }

}
