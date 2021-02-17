import { async, ComponentFixture, TestBed,fakeAsync } from '@angular/core/testing';

import { ImageEncryptionComponent } from './image-encryption.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { of, Observable,throwError } from 'rxjs';

describe('ImageEncryptionComponent', () => {
  let component: ImageEncryptionComponent;
  let fixture: ComponentFixture<ImageEncryptionComponent>;
  let service: FypBackendService;

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
    service=TestBed.inject(FypBackendService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Image Split OK', fakeAsync(() => {
    component.imageForm.controls['secret'].setValue("test");
    component.imageForm.controls['totalShare'].setValue(3);
    component.imageForm.controls['threshold'].setValue(2);
   
    spyOn(service, 'imageEncryption').and.returnValue(of({'share0': 'AafjCPc=','share1': 'AafjCPc=', 'share2': 'AafjCPc='})); //{'share0': 'AafjCPc='} -> test
    component.splitText();
    expect(service.imageEncryption).toHaveBeenCalled();

  }));

  it('Image other', () => {
    component.secret;
    component.isClick();
    component.imageLoad(null);
  });

  it('Image Split error', fakeAsync(() => {
    component.imageForm.controls['secret'].setValue("test");
    component.imageForm.controls['totalShare'].setValue(3);
    component.imageForm.controls['threshold'].setValue(2);
   
    spyOn(service, 'imageEncryption').and.returnValue(throwError( "" ) );
    component.splitText();
    expect(service.imageEncryption).toHaveBeenCalled();

  }));

  it('Image load', () => {
    
    let testContent= new Blob(["testImage"]);
    let data=new Array<Blob>();
    data.push(testContent);
    let event={ target: { files: data }};
    component.imageLoad(event);

  });
});
