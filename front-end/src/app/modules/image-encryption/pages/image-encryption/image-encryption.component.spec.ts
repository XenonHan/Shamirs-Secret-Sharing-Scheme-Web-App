import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEncryptionComponent } from './image-encryption.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

describe('ImageEncryptionComponent', () => {
  let component: ImageEncryptionComponent;
  let fixture: ComponentFixture<ImageEncryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageEncryptionComponent,FaIconComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule,FlexLayoutModule,MatDividerModule,  ],
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
