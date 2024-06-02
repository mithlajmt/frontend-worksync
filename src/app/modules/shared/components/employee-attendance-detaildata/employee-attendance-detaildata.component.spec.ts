import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAttendanceDetaildataComponent } from './employee-attendance-detaildata.component';

describe('EmployeeAttendanceDetaildataComponent', () => {
  let component: EmployeeAttendanceDetaildataComponent;
  let fixture: ComponentFixture<EmployeeAttendanceDetaildataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAttendanceDetaildataComponent]
    });
    fixture = TestBed.createComponent(EmployeeAttendanceDetaildataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
