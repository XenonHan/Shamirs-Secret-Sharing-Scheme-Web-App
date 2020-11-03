import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipRecoveryComponent } from './zip-recovery.component';

describe('ZipRecoveryComponent', () => {
  let component: ZipRecoveryComponent;
  let fixture: ComponentFixture<ZipRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
