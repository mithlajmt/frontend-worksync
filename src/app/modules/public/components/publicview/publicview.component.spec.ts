import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicviewComponent } from './publicview.component';

describe('PublicviewComponent', () => {
  let component: PublicviewComponent;
  let fixture: ComponentFixture<PublicviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicviewComponent]
    });
    fixture = TestBed.createComponent(PublicviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
