import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRecoveryComponent } from './image-recovery.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

describe('ImageRecoveryComponent', () => {
  let component: ImageRecoveryComponent;
  let fixture: ComponentFixture<ImageRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRecoveryComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule  ],
      providers: [ FypBackendService ]
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
