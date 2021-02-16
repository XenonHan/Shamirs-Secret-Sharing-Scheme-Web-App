import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRecoveryComponent } from './text-recovery.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

describe('TextRecoveryComponent', () => {
  let component: TextRecoveryComponent;
  let fixture: ComponentFixture<TextRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextRecoveryComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule  ],
      providers: [ FypBackendService ]
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
