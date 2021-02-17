import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipEncryptionComponent } from './zip-encryption.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

describe('ZipEncryptionComponent', () => {
  let component: ZipEncryptionComponent;
  let fixture: ComponentFixture<ZipEncryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipEncryptionComponent,FaIconComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule,FlexLayoutModule,MatDividerModule  ],
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
