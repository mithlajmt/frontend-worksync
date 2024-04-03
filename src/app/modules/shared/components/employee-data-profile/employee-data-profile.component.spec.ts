import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataProfileComponent } from './employee-data-profile.component';

describe('EmployeeDataProfileComponent', () => {
  let component: EmployeeDataProfileComponent;
  let fixture: ComponentFixture<EmployeeDataProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDataProfileComponent]
    });
    fixture = TestBed.createComponent(EmployeeDataProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
