import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { ApiService } from 'src/app/modules/company/services/api.service';

@Component({
  selector: 'app-employee-data-profile',
  templateUrl: './employee-data-profile.component.html',
  styleUrls: ['./employee-data-profile.component.css']
})
export class EmployeeDataProfileComponent implements OnInit {
  @ViewChild('showMoreSection', { static: false }) showMoreSection!: ElementRef;
  deleteConfirm:boolean=false
  isEditFormVisible:boolean=false
  confirmationMessage: string = '';
  bodyText: string = '';
  employeeToDelete:string=''
  employees!:any[];
  addClicked=false;
  showTable: boolean = true;
  onShowMore: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private common: CommonService,
    private api:ApiService,
    private router:Router
  ) { }
  employeeData:any
  ngOnInit(): void {
    // Get the route parameter 'id' using ActivatedRoute
    const employeeId = this.activatedRoute.snapshot.params['id'];

    // Call the common service method to fetch employee data
    this.common.getFullEmployeeData(employeeId).subscribe({
      next: (res:any) => {
        this.employeeData = res.data[0]
        console.log(this.employeeData.photo);
        this.showTable = true
        
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteEmployee() {
    const employeeId = this.activatedRoute.snapshot.params['id'];
    const currentUrl = this.router.url; // Get the current route URL

    this.api.deletingEmployee(employeeId).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.deleteConfirm=false

          this.router.navigate(['/companyAdmin/employee']); // Navigate to the current route URL
          alert('employeeDeletedSuccessfully  ')
          // console.log(res);
          
        }
      },
      error: (err: any) => {
        console.error('Error deleting employee:', err);
        alert(err.error.message)
        // Handle the error, e.g., show a notification or log it
      }
    });
  }

  onDeleteButtonClick(){
    const employeeId = this.activatedRoute.snapshot.params['id'];
    this.deleteConfirm=true
    this.confirmationMessage='Confirm Deletion'
    this.bodyText='Are you sure you want to delete?'
    this.employeeToDelete = employeeId
    console.log(this.employeeToDelete);
    
   }

   onDeleteConfirmation(){
    this.deleteEmployee();

    // this.isEditFormVisible=true
    
   }

   onCancelConfirmationDelete(){
    this.deleteConfirm=false
    this.employeeToDelete=''
   }





   editEmployee(){
    const employeeId = this.activatedRoute.snapshot.params['id'];
    this.isEditFormVisible=true
  }


  showMore() {
    this.onShowMore = true;
    // setTimeout(() => {
    //   this.scrollToShowMore();
    // }, 100); // Timeout to ensure the div is rendered
  }

  // scrollToShowMore() {
  //   if (this.showMoreSection) {
  //     this.showMoreSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  
  
   onEditCancelClicked(){
    
    this.isEditFormVisible=false
  
    
    //   this.router.navigate([], {
    //     relativeTo: this.route, // Import ActivatedRoute and inject it in the constructor
    //     queryParams: { selected: null }, // Specify the query parameter to be removed
    //     queryParamsHandling: 'merge', // Keep existing query parameters
    //   });    
   }
  
   onEditSaveclicked(){
    this.isEditFormVisible=false
   }
}
