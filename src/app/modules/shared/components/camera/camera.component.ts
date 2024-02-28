import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil, } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { AttendenceService } from '../../services/attendence.service';

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



  constructor(
    private attendence:AttendenceService,

  ){}



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

// Function to handle image upload
uploadImage() {
  // Create a new FormData object to prepare the data for an HTTP request.
  const formData = new FormData();

  // Extract the base64-encoded part of the previewImage (remove the data URI prefix).
  const base64 = this.previewImage.split(',')[1];

  // Convert the base64-encoded string to a Blob.
  const imageBlob = this.dataURItoBlob(base64);

  // Set a name for the image file.
  const imageName = 'name.png';

  // Create a File object from the Blob, providing a name and MIME type.
  const imageFile = new File([imageBlob], imageName, { type: 'image/png' });

  // Log the created File object to the console.
  console.log(imageFile, 'IHIHIIH');

  // Append the File object to the FormData under the key 'photo'.
  formData.append('photo', imageFile);

  // Make an HTTP POST request with the FormData to a service or API endpoint.
  this.attendence.postattendence(formData).subscribe({
    // Log the response if the request is successful.
    next: (res) => {
      console.log(res);
    },
    // Log any errors that occur during the request.
    error: (err) => {
      console.log(err);
    }
  });
}

// Function to convert a base64-encoded data URI to a Blob.       //ASCII,BLOB,ATOB
dataURItoBlob(dataURI: string) {

  // Decode the base64 string using the atob function. //its inbuilt js function to convert base64 into binary
  const byteString = window.atob(dataURI);

  // Create an ArrayBuffer with the length of the byteString.
  const arrayBuffer = new ArrayBuffer(byteString.length);  
   //ArrayBuffer: It is a built-in object in JavaScript that is used to represent a generic, fixed-length binary data buffer.
  // An ArrayBuffer cannot be directly manipulated; instead, views are created on top of it.

  // Create a Uint8Array to represent the binary data.
  const int8Array = new Uint8Array(arrayBuffer);

  // Iterate over the byteString, assigning each character code to the Uint8Array.
  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array, specifying the MIME type.
  const blob = new Blob([int8Array], { type: 'image/png' });

  // Note: Blob is a JavaScript object representing raw binary data.

  // Return the created Blob.
  return blob;
}

  snapshot(event:WebcamImage){
    console.log(event);
    this.previewImage=event.imageAsDataUrl
    console.log(this.previewImage);
    this.btnLabel='Recapture image'
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
  



