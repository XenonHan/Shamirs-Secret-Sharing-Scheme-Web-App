import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipEncryptionComponent } from './zip-encryption.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

describe('ZipEncryptionComponent', () => {
  let component: ZipEncryptionComponent;
  let fixture: ComponentFixture<ZipEncryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipEncryptionComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule  ],
      providers: [ FypBackendService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
