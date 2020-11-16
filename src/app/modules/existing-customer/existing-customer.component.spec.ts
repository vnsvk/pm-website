import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingCustomerComponent } from './existing-customer.component';

describe('ExistingCustomerComponent', () => {
  let component: ExistingCustomerComponent;
  let fixture: ComponentFixture<ExistingCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
