import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeDataComponent } from './edit-employee-data.component';

describe('EditEmployeeDataComponent', () => {
  let component: EditEmployeeDataComponent;
  let fixture: ComponentFixture<EditEmployeeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEmployeeDataComponent]
    });
    fixture = TestBed.createComponent(EditEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
