import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRecoveryComponent } from './text-recovery.component';

describe('TextRecoveryComponent', () => {
  let component: TextRecoveryComponent;
  let fixture: ComponentFixture<TextRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
