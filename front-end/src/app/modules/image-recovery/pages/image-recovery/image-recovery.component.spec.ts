import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRecoveryComponent } from './image-recovery.component';

describe('ImageRecoveryComponent', () => {
  let component: ImageRecoveryComponent;
  let fixture: ComponentFixture<ImageRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
