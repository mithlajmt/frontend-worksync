import { Component } from '@angular/core';
import { AuthguardService } from 'src/app/services/authguard.service';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { userData } from 'src/app/services/userData.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  profile=''
  name=''
  showPro = false
  constructor(
    private authGuardService: AuthguardService,
    private common:CommonService,
    private router:Router,
    private user:userData
    ) 
    {}

  ngOnInit() {
    this.common.getUsernameAndProfile().subscribe({
      next:(res)=>{
        console.log(res)
        this.profile=res.data[0].photo;
        this.name=res.data[0].name;

        if(this.user.role == 'companyAdmin'){

          this.showPro = false
        }else{
          this.showPro = true
        }

        
        
      },
      error:(err)=>{
        console.log(err);
        alert(err.error.message)
        localStorage.clear()
        this.router.navigate(['/login'])
      
      }
    })
  }

  
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLogout(){
    localStorage.clear()
  }


  

}
