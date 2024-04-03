import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, SelectControlValueAccessor, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { EmployeeEditForm } from '../../../interfaces/employee-edit-form';

@Component({
  selector: 'app-edit-employee-data',
  templateUrl: './edit-employee-data.component.html',
  styleUrls: ['./edit-employee-data.component.css']
})
export class EditEmployeeDataComponent implements OnInit {

  @Output() cancelClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveEditClicked:EventEmitter<void> = new EventEmitter<void>();
  employeeData:any={}
  editingForm!:FormGroup
  editedFormData!:EmployeeEditForm;
  selectedEmployee:string=''

  isFormVisible:boolean=true

  constructor( 
    private route:ActivatedRoute,
    private api:ApiService,
    private router:Router,
    private formBuilder:FormBuilder

    ){
      this.editingForm = new FormGroup({
        contactEmail: new FormControl('', [Validators.required, Validators.minLength(2)]),
        employeeName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        contactNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
        salary: new FormControl('', [Validators.required, Validators.minLength(2)]),
        hireDate: new FormControl('', [Validators.required, Validators.minLength(2)]),
        department: new FormControl('', [Validators.required, Validators.minLength(2)]),
        role : new FormControl('', [Validators.required, Validators.minLength(2)]),
        gender : new FormControl('', [Validators.required, Validators.minLength(2)]),
      });
      
    }

    ngOnInit(): void {

      const employeeId = this.route.snapshot.params['id'];
      this.selectedEmployee = employeeId
      
        this.api.getEmployeeData(this.selectedEmployee).subscribe({
          next: (res:any) => {
            if(res.success){
              
              this.employeeData=res.data
              console.log(this.employeeData);
              
              this.loadForm()
            }
          },
          error: (err) => { // Change 'catch' to 'error'
            console.log(err);
            // Handle the error, e.g., show an error message to the user
          }
        });
      
    
    }

    loadForm(){

      this.editingForm = new FormGroup({
        contactEmail: new FormControl(this.employeeData?.contactEmail, [Validators.required, Validators.minLength(2)]),
        employeeName: new FormControl(this.employeeData?.employeeName, [Validators.required, Validators.minLength(2)]),
        contactNumber: new FormControl(this.employeeData?.contactNumber, [Validators.required, Validators.minLength(10)]),
        salary: new FormControl(this.employeeData?.salary, [Validators.required, Validators.minLength(2)]),
        hireDate: new FormControl(this.employeeData?.hireDate, [Validators.required, Validators.minLength(2)]),
        department: new FormControl(this.employeeData?.department, [Validators.required, Validators.minLength(2)]),
        role : new FormControl(this.employeeData?.role, [Validators.required, Validators.minLength(2)]),
        gender : new FormControl(this.employeeData?.gender, [Validators.required, Validators.minLength(2)]),
      });


    }

                            //better version

    

  onSaveClick(){
    this.editedFormData=this.editingForm.value
    console.log(this.editedFormData);
    this.api.updateEmployee(this.selectedEmployee,this.editedFormData).subscribe({
      next:(res:any)=>{
        console.log(res);
        if (res.success) {
          this.saveEditClicked.emit()
        }
      },
      error:(err)=>{
        console.log(err);
      }
      
    })

    
  }
  onCancel(){
    this.cancelClicked.emit();

   }



}
