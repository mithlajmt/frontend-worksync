import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthguardService } from 'src/app/services/authguard.service';
import { JwtService } from 'src/app/services/jwt.service';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  isCompany: boolean = false;
  isAdmin: boolean = false;
  isDepartmentHead: boolean = false;
  isEmployee: boolean = false;
  companyName: string = '';
  role: string = '';
  isMobileOpen: boolean = false;
  private toggleSub!: Subscription;

  constructor(
    private router: Router,
    private jwt: JwtService,
    private authGuarService: AuthguardService,
    private common: CommonService
  ) {}

  ngOnInit(): void {
    const token: any = this.jwt.getTokenFromLocalStorage();
    this.common.getUserDetails().subscribe({
      next: (res: any) => {
        if (res && res.data && res.data[0]) {
          this.companyName = res.data[0].companyName;
          this.role = res.data[0].role;
          this.isCompany = this.role === 'companyAdmin';
          this.isAdmin = this.role === 'admin';
          this.isEmployee = (this.role === 'employee' || this.role === 'intern');
          this.isDepartmentHead = this.role === 'departmentHead';
        }
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.toggleSub = this.common.mobileSidebarToggle$.subscribe(isOpen => {
      this.isMobileOpen = isOpen;
    });
  }

  ngOnDestroy(): void {
    if (this.toggleSub) {
      this.toggleSub.unsubscribe();
    }
  }

  closeMobile() {
    this.common.closeMobileSidebar();
  }

  passString(string: string): void {
    this.authGuarService.shareTextBehaviourSubject.next(string);
  } 
  
  ji() {
    this.common.closeMobileSidebar();
    localStorage.clear();
    this.router.navigate(['login']);
  }

  navigate(link: string) {
    this.common.closeMobileSidebar();
    const parentRole = (this.role === 'intern') ? 'employee' : this.role;
    this.router.navigate([`/${parentRole}/${link}`]);
  }
}
