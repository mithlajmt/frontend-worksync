import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentStatiscticsComponent } from './department-statisctics.component';

describe('DepartmentStatiscticsComponent', () => {
  let component: DepartmentStatiscticsComponent;
  let fixture: ComponentFixture<DepartmentStatiscticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentStatiscticsComponent]
    });
    fixture = TestBed.createComponent(DepartmentStatiscticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
