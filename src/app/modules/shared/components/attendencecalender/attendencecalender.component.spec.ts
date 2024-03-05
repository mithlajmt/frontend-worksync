import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendencecalenderComponent } from './attendencecalender.component';

describe('AttendencecalenderComponent', () => {
  let component: AttendencecalenderComponent;
  let fixture: ComponentFixture<AttendencecalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendencecalenderComponent]
    });
    fixture = TestBed.createComponent(AttendencecalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
