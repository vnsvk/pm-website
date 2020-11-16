import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingTipsComponent } from './moving-tips.component';

describe('MovingTipsComponent', () => {
  let component: MovingTipsComponent;
  let fixture: ComponentFixture<MovingTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
