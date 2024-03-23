import { AfterContentInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements AfterContentInit {
  profileForm!: FormGroup;
  profileData: any;
  updateProfile!:FormData;
  loaded = false;
  profileImage = ''

  constructor(
    private fb: FormBuilder,
    private serv: CommonService
    ) {

      this.updateProfile = new FormData
    }

  ngAfterContentInit(): void {
    this.serv.getProfile().subscribe({
      next: (res) => {
        this.profileData = res.data[0];
        this.initForm(); // Initialize the form after data is received
        console.log(this.profileData.employeeName);
      },
      error: (err) => console.log(err)
    });
  }

  initForm(): void {
    this.profileImage = this.profileData?.photo || 'https://i.pinimg.com/originals/6e/4c/9d/6e4c9d2edd4e96ebf5aa313f15827b15.jpg'
    this.profileForm = this.fb.group({
      name: [this.profileData?.employeeName || '', Validators.required],
      email: [this.profileData?.contactEmail || '', [Validators.required, Validators.email]],
      gender: [this.profileData?.gender || '', Validators.required],
      phoneNumber: [this.profileData?.contactNumber || '', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      secondPhoneNumber: [this.profileData?.secondPhoneNumber || ''],
      bio: [this.profileData?.bio || ''],
      address: [this.profileData?.address || '', Validators.required],
      skills: this.fb.array([]) // Define skills as an array
    });
    this.loaded = true; // Set loaded to true after form initialization
  }

  // Getter for easier access to form controls
  get f() {
    return this.profileForm.controls;
  }

  onSubmit() {
        // Append each form control value to the FormData object manually
    this.updateProfile.append('name', this.profileForm.value.name);
    this.updateProfile.append('age', this.profileForm.value.age);
    this.updateProfile.append('email', this.profileForm.value.email);
    this.updateProfile.append('gender', this.profileForm.value.gender);
    this.updateProfile.append('phoneNumber', this.profileForm.value.phoneNumber);
    this.updateProfile.append('secondPhoneNumber', this.profileForm.value.secondPhoneNumber);
    this.updateProfile.append('bio', this.profileForm.value.bio);
    this.updateProfile.append('address', this.profileForm.value.address);

    // Assuming skills is an array of strings
    // this.profileForm.value.skills.forEach((skill: string, index: number) => {
    //   this.updateProfile.append(`skills[${index}]`, skill);
    // });
  
    console.log(this.updateProfile);
    
    this.serv.UpdateProfile(this.updateProfile).subscribe({
      next:(res)=>{

      },
      error:(err)=>{
        console.log(err); 
      }
    })

  }


  onProfileImageSelected(event: any) {
    // Check if any files are selected
    if (event.target.files && event.target.files.length > 0) {
        // Get the first file (assuming it's an image)
        const selectedImage = event.target.files[0];
        
        this.updateProfile.append('image',selectedImage)
        
        // Create a file reader object to read the selected image
        const reader = new FileReader();
        
        // Define a callback function to execute when the file is loaded
        reader.onload = (e) => {
            // Update the profileImage variable with the data URL of the selected image
            this.profileImage = e.target?.result?.toString() || ''; // Convert the data URL to string
        };
        
        // Read the selected image as a data URL
        reader.readAsDataURL(selectedImage);
    }
}

}
