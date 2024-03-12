import { Component, OnInit } from '@angular/core';
import { ApiutitilityService } from '../../services/apiUtitility.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-statisctics',
  templateUrl: './department-statisctics.component.html',
  styleUrls: ['./department-statisctics.component.css']
})
export class DepartmentStatiscticsComponent implements OnInit {
  departmentData:any;
  loaded:boolean = false
  constructor(
    private api:ApiutitilityService,
    private active:ActivatedRoute
  ){}

  ngOnInit(): void {
    const ID = this.active.snapshot.paramMap.get('id') 
    this.api.getDepartmentData(ID).subscribe({
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
