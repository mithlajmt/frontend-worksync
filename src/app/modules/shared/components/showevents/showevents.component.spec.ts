import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoweventsComponent } from './showevents.component';

describe('ShoweventsComponent', () => {
  let component: ShoweventsComponent;
  let fixture: ComponentFixture<ShoweventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoweventsComponent]
    });
    fixture = TestBed.createComponent(ShoweventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
