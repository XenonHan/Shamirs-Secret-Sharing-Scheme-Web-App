import { async, ComponentFixture, TestBed,fakeAsync, } from '@angular/core/testing';

import { TextEncryptionComponent } from './text-encryption.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

import { of, Observable,throwError } from 'rxjs';




import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';


import { CdkTextareaAutosize } from '@angular/cdk/text-field';




describe('TextEncryptionComponent', () => {
  let component: TextEncryptionComponent;
  let fixture: ComponentFixture<TextEncryptionComponent>;
  let service: FypBackendService;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEncryptionComponent,CdkTextareaAutosize ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule,FlexLayoutModule,MatDividerModule ],
      providers: [ FypBackendService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEncryptionComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    
    service=TestBed.inject(FypBackendService);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Text Split OK', fakeAsync(() => {
    component.textForm.controls['secret'].setValue("test");
    component.textForm.controls['totalShare'].setValue(3);
    component.textForm.controls['threshold'].setValue(2);
   
    spyOn(service, 'textEncryption').and.returnValue(of({'share0': 'AafjCPc=','share1': 'AafjCPc=', 'share2': 'AafjCPc='})); //{'share0': 'AafjCPc='} -> test
    component.splitText();
    expect(service.textEncryption).toHaveBeenCalled();

  }));

  it('Text Split error', fakeAsync(() => {
    component.textForm.controls['secret'].setValue("test");
    component.textForm.controls['totalShare'].setValue(3);
    component.textForm.controls['threshold'].setValue(2);
   
    spyOn(service, 'textEncryption').and.returnValue(throwError( "" ) );
    component.splitText();
    expect(service.textEncryption).toHaveBeenCalled();

  }));

  it('Text Click', fakeAsync(() => {
    component.isClick();


  }));

});