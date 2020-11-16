import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyJob3Component } from './apply-job3.component';

describe('ApplyJob3Component', () => {
  let component: ApplyJob3Component;
  let fixture: ComponentFixture<ApplyJob3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyJob3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyJob3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
