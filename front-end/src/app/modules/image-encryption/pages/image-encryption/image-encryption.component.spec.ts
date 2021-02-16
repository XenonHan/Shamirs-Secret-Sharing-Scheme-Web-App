import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEncryptionComponent } from './image-encryption.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

describe('ImageEncryptionComponent', () => {
  let component: ImageEncryptionComponent;
  let fixture: ComponentFixture<ImageEncryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageEncryptionComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule  ],
      providers: [ FypBackendService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
