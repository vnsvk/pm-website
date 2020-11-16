import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleNowComponent } from './schedule-now.component';

describe('ScheduleNowComponent', () => {
  let component: ScheduleNowComponent;
  let fixture: ComponentFixture<ScheduleNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
