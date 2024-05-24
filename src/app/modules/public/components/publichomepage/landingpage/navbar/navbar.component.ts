import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('thirdPage', { static: true }) thirdPage!: ElementRef;

  scrollToThirdPage(event: Event): void {
    event.preventDefault();
    this.thirdPage.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
