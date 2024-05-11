import { Component } from '@angular/core';
import { AuthguardService } from 'src/app/services/authguard.service';
import { CommonService } from '../../services/common.service';

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
    private common:CommonService
    ) 
    {}

  ngOnInit() {
    this.common.getUsernameAndProfile().subscribe({
      next:(res)=>{
        console.log(res)
        this.profile=res.data[0].photo;
        this.name=res.data[0].name;
        
        this.showPro = true
        
      },
      error:(err)=>{
        console.log(err);
        
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
