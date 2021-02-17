import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRecoveryComponent } from './text-recovery.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

describe('TextRecoveryComponent', () => {
  let component: TextRecoveryComponent;
  let fixture: ComponentFixture<TextRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextRecoveryComponent,FaIconComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule,MatDividerModule,FlexLayoutModule  ],
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
