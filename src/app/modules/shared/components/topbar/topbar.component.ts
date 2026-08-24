import { Component, OnInit } from '@angular/core';
import { AuthguardService } from 'src/app/services/authguard.service';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { userData } from 'src/app/services/userData.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  profile = '';
  name = '';
  showPro = false;
  isMenuOpen: boolean = false;
  isMobileNavOpen: boolean = false;

  constructor(
    private authGuardService: AuthguardService,
    private common: CommonService,
    private router: Router,
    private user: userData
  ) {}

  ngOnInit() {
    this.common.getUsernameAndProfile().subscribe({
      next: (res) => {
        if (res && res.data && res.data[0]) {
          this.profile = res.data[0].photo;
          this.name = res.data[0].name;
        }

        if (this.user.role === 'companyAdmin') {
          this.showPro = false;
        } else {
          this.showPro = true;
        }
      },
      error: (err) => {
        console.error(err);
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  navigateMobile(path: string) {
    this.isMobileNavOpen = false;
    this.router.navigate([path]);
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
