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
  profileImage = '';
  profileFormError: string = '';

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

  selectedImageFile: File | null = null;

  onSubmit() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      const errors: string[] = [];
      if (this.f['name']?.invalid) errors.push('Name is required');
      if (this.f['email']?.invalid) {
        if (this.f['email'].errors?.['required']) errors.push('Email is required');
        else if (this.f['email'].errors?.['email']) errors.push('Invalid email format');
      }
      if (this.f['gender']?.invalid) errors.push('Gender selection is required');
      if (this.f['phoneNumber']?.invalid) {
        if (this.f['phoneNumber'].errors?.['required']) errors.push('Phone number is required');
        else if (this.f['phoneNumber'].errors?.['pattern']) errors.push('Phone number must be 10 digits');
      }
      if (this.f['address']?.invalid) errors.push('Address is required');

      this.profileFormError = `Cannot submit: ${errors.join(', ')}.`;
      return;
    }

    this.profileFormError = '';
    const formValue = this.profileForm.value;
    const bioValue = Array.isArray(formValue.bio) ? formValue.bio[0] : formValue.bio;

    const formData = new FormData();
    formData.append('name', formValue.name);
    formData.append('email', formValue.email);
    formData.append('gender', formValue.gender);
    formData.append('phoneNumber', formValue.phoneNumber);
    formData.append('secondPhoneNumber', formValue.secondPhoneNumber || '');
    formData.append('bio', bioValue || '');
    formData.append('address', formValue.address);

    if (this.selectedImageFile) {
      formData.append('image', this.selectedImageFile);
    }

    this.serv.UpdateProfile(formData).subscribe({
        next: (res) => {
            alert('Profile updated successfully');
        },
        error: (err) => {
            console.log(err); 
            this.profileFormError = err.error?.message || 'Failed to update profile. Please try again.';
        }
    });
  }




  changePasswordForm: FormGroup = this.fb.group({
    currentPassword: ['', [Validators.required, Validators.minLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmNewPassword: ['', [Validators.required, Validators.minLength(6)]],
  });
  passwordErrorMessage: string = '';

  onChangePassword() {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      const errors: string[] = [];
      const cp = this.changePasswordForm.controls['currentPassword'];
      const np = this.changePasswordForm.controls['newPassword'];
      const cnp = this.changePasswordForm.controls['confirmNewPassword'];

      if (cp.invalid) errors.push('Current password is required (min 6 characters)');
      if (np.invalid) errors.push('New password is required (min 6 characters)');
      if (cnp.invalid) errors.push('Confirm password is required (min 6 characters)');

      this.passwordErrorMessage = `Cannot submit: ${errors.join(', ')}.`;
      return;
    }

    const { currentPassword, newPassword, confirmNewPassword } = this.changePasswordForm.value;
    if (newPassword !== confirmNewPassword) {
      this.passwordErrorMessage = 'New password and confirm password do not match.';
      return;
    }
    this.passwordErrorMessage = '';
    this.serv.changePassword({ currentPassword, newPassword }).subscribe({
      next: (res: any) => {
        if (res.success) {
          alert('Password changed successfully!');
          this.changePasswordForm.reset();
        } else {
          this.passwordErrorMessage = res.message || 'Failed to change password.';
        }
      },
      error: (err: any) => {
        this.passwordErrorMessage = err.error?.message || 'Current password is incorrect or failed to update.';
        console.error(err);
      }
    });
  }

  onProfileImageSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
        const selectedFile: File = event.target.files[0];
        this.selectedImageFile = selectedFile;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            this.profileImage = e.target?.result?.toString() || '';
        };
        reader.readAsDataURL(selectedFile);
    }
  }

}
