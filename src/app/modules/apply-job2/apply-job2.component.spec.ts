import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyJob2Component } from './apply-job2.component';

describe('ApplyJob2Component', () => {
  let component: ApplyJob2Component;
  let fixture: ComponentFixture<ApplyJob2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyJob2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyJob2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
