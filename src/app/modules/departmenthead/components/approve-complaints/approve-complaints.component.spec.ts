import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveComplaintsComponent } from './approve-complaints.component';

describe('ApproveComplaintsComponent', () => {
  let component: ApproveComplaintsComponent;
  let fixture: ComponentFixture<ApproveComplaintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveComplaintsComponent]
    });
    fixture = TestBed.createComponent(ApproveComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
