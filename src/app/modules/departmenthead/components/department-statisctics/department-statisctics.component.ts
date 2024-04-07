import { Component, OnInit } from '@angular/core';
import { ApiutitilityService } from '../../services/apiUtitility.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';
import { ApiService } from 'src/app/modules/company/services/api.service';

@Component({
  selector: 'app-department-statisctics',
  templateUrl: './department-statisctics.component.html',
  styleUrls: ['./department-statisctics.component.css']
})
export class DepartmentStatiscticsComponent implements OnInit {
   ID = ''
  departmentData:any;
  loaded:boolean = false
  constructor(
    private api:ApiutitilityService,
    private route:ActivatedRoute,
    private router:Router,
    private jwt:JwtService,
    private apis:ApiService
  ){}

  ngOnInit(): void {


    const Token = this.jwt.getTokenFromLocalStorage();
    const decTok = this.jwt.decodeToken(Token)
    
    if(decTok.role=='departmentHead'){

      this.apis.getDepID().subscribe({
        next:(res:any)=>{
          this.ID = res.data.departmentID    
          this.getData()    
        },
        error:(err)=>{
          console.log(err);     
        }
      })

    }
    else{
      this.ID = this.route.snapshot.params['id'];
      this.getData()
    }
    // const ID = this.route.snapshot.paramMap.get('id') 


  }

  onPresentClick() {
    // Update the query parameter 'employee' to 'present' without navigating
    this.router.navigate([], { 
        relativeTo: this.route,
        queryParams: { employee: 'present' }, 
        queryParamsHandling: 'merge' 
    });
}

getData(){

  this.api.getDepartmentData(this.ID).subscribe({
    next:(res:any)=>{
      this.departmentData = res.data[0]
      this.loaded=true
      console.log(this.departmentData);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })  
}
}
