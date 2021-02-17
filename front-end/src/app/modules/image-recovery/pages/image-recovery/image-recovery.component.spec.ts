import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRecoveryComponent } from './image-recovery.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

describe('ImageRecoveryComponent', () => {
  let component: ImageRecoveryComponent;
  let fixture: ComponentFixture<ImageRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRecoveryComponent,FaIconComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule,FlexLayoutModule,MatDividerModule  ],
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
