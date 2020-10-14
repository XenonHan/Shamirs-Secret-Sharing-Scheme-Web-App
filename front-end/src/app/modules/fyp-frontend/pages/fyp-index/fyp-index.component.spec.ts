import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypIndexComponent } from './fyp-index.component';

describe('FypIndexComponent', () => {
  let component: FypIndexComponent;
  let fixture: ComponentFixture<FypIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
