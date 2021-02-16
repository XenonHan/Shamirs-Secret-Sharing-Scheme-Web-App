import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEncryptionComponent } from './text-encryption.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

import { CdkTextareaAutosize } from '@angular/cdk/text-field';


describe('TextEncryptionComponent', () => {
  let component: TextEncryptionComponent;
  let fixture: ComponentFixture<TextEncryptionComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEncryptionComponent,CdkTextareaAutosize ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule  ],
      providers: [ FypBackendService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
