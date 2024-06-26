import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  result:boolean = false;
  message = ''
  note=''
  s:any
  apiEnd:string = 'departmentNames' //for child
  // MultiSelect:boolean = false ; //for child
  reactiveForm!: FormGroup;
  selectedFile: File[] = [];

  constructor(
    private formBuilder: FormBuilder,
     private api: ApiService,
     private loading:LoadingService
    ) {}




  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      employeeName: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      hireDate: ['', Validators.required],
      department: ['', [Validators.required, Validators.minLength(2)]],
      role: ['', [Validators.required, Validators.minLength(2)]],
      salary: [0, [Validators.required, Validators.minLength(2)]],
      identityProof: [''] // Add this line to define the control for identityProof
    });
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      const formData = new FormData();
      const value = this.reactiveForm.value;

      formData.append('employeeName', value.employeeName);
      formData.append('dateOfBirth', value.dateOfBirth);
      formData.append('gender', value.gender);
      formData.append('salary', value.salary);
      formData.append('contactEmail', value.contactEmail);
      formData.append('contactNumber', value.contactNumber);
      formData.append('hireDate', value.hireDate);
      formData.append('department', value.department);
      formData.append('role', value.role);
      formData.append('identityProof', this.selectedFile[0]); // Use selectedFile


      this.loading.show()

      this.api.addingEmployee(formData).subscribe({
        next: (res:any) => {
      this.loading.hide()
          this.result = true
          this.message = res.message
          this.note = res.note

          // this.reactiveForm.reset();
          this.selectedFile = []; // Reset selectedFile array
          this.reactiveForm.reset()
        },
        error: (err) => {
      this.loading.hide()
          console.log(err);
          this.result = true
          this.message = err.error.message
        }
      });
    }
  }

  handleDepartmentSelection(event:any){
    console.log(event);
    this.reactiveForm.patchValue({
      department:event[0]
    })


  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFile = [files[0]]; // Update the selectedFile array
    } else {
      alert('YOU CAN CHOOSE ONLY ONE FILE');
    }
  }

  onAdding(){
    this.result = false
  }
}
