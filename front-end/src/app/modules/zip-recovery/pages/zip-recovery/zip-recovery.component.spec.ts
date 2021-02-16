import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipRecoveryComponent } from './zip-recovery.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

describe('ZipRecoveryComponent', () => {
  let component: ZipRecoveryComponent;
  let fixture: ComponentFixture<ZipRecoveryComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipRecoveryComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule  ],
      providers: [ FypBackendService ]
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
