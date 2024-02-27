import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil, } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  stream:any=null;
  @Output() getPicuture = new EventEmitter<WebcamImage>();
  status:any=null
  trigger:Subject<void>=new Subject();
  previewImage!:any;
  btnLabel:string='captureImage';
  cameraLoaded:boolean=false;
  showImage:boolean=false;
  capturedImage:any;





  get $trigger():Observable<void>{
    return this.trigger.asObservable();
  }

  


  checkPermissions() {
    // This is to check whether there is permission for camera access
    // This is just a JavaScript code snippet and not related to ngx webcam navigator
  
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 500,
        height: 500,
      }
    })
    .then((stream) => {
      // Handle successful permission here
      console.log('Camera access granted');
      this.status='cammera access granted'
      this.stream=stream
      this.btnLabel='capture image'
      this.cameraLoaded=true
    })
    .catch((err) => {
      // Handle errors
      console.log('Error:', err);
      this.status= err
    });
  }
  
  ngOnInit(): void {
    this.checkPermissions();
  }


  captureImage(){
    this.trigger.next();
    this.showImage = true
  }

  uploadImage(){


  }

  snapshot(event:WebcamImage){
    console.log(event);
    this.previewImage=event.imageAsDataUrl
    console.log(this.previewImage);
    this.btnLabel='Recapture image'
    // this.capturedImage
    this.ofCam()
  }

  ofCam() {
    this.stream.getTracks().forEach((track: any) => {
      track.stop();
    });
    this.stream = null;
    this.status = 'Camera turned off';
    // this.btnLabel = 'Capture Image';
  }
  

  }
  



