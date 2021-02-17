import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ZipEncryptionComponent } from './zip-encryption.component';

import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDividerModule } from '@angular/material/divider';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { of, Observable, throwError } from 'rxjs';

describe('ZipEncryptionComponent', () => {
  let component: ZipEncryptionComponent;
  let fixture: ComponentFixture<ZipEncryptionComponent>;
  let service: FypBackendService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZipEncryptionComponent, FaIconComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FlexLayoutModule, MatDividerModule],
      providers: [FypBackendService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(FypBackendService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Zip Split OK', fakeAsync(() => {
    component.zipForm.controls['secret'].setValue("test");
    component.zipForm.controls['totalShare'].setValue(3);
    component.zipForm.controls['threshold'].setValue(2);

    //need to load a file to bypass the file size checking write for zip file only
    let testContent = new Blob(["zipFile"]);
    let data = new Array<Blob>();
    data.push(testContent);
    let testFIle=new File(data,"test")
    Object.defineProperty(testFIle, 'size',  { value: 1 }); 
    component.imageFile=testFIle;

    spyOn(service, 'zipEncryption').and.returnValue(of({ 'share0': 'AafjCPc=', 'share1': 'AafjCPc=', 'share2': 'AafjCPc=' })); //{'share0': 'AafjCPc='} -> test

    component.splitText();
    expect(service.zipEncryption).toHaveBeenCalled();

  }));

  it('Zip Split final check', fakeAsync(() => {
    component.zipForm.controls['secret'].setValue("test");
    component.zipForm.controls['totalShare'].setValue(3);
    component.zipForm.controls['threshold'].setValue(2);

    //need to load a file to bypass the file size checking write for zip file only
    let testContent = new Blob(["zipFile"]);
    let data = new Array<Blob>();
    data.push(testContent);
    let testFIle=new File(data,"test")
    Object.defineProperty(testFIle, 'size',  { value: 15728641 }); //1 larger
    component.imageFile=testFIle;

    component.splitText();
    expect(component.tooLarge).toBe(true);

  }));

  it('Zip other', () => {
    component.secret;
    component.imageLoad(null);
  });

  it('Zip Split error', fakeAsync(() => {
    component.zipForm.controls['secret'].setValue("test");
    component.zipForm.controls['totalShare'].setValue(3);
    component.zipForm.controls['threshold'].setValue(2);

    //need to load a file to bypass the file size checking write for zip file only
    let testContent = new Blob(["zipFile"]);
    let data = new Array<Blob>();
    data.push(testContent);
    let testFIle=new File(data,"test")
    Object.defineProperty(testFIle, 'size',  { value: 1 }); 
    component.imageFile=testFIle;

    spyOn(service, 'zipEncryption').and.returnValue(throwError(""));
    component.splitText();
    expect(service.zipEncryption).toHaveBeenCalled();

  }));

  it('Zip load', () => {

    let testContent = new Blob(["zipFile"]);
    let data = new Array<Blob>();
    data.push(testContent);
    let event = { target: { files: data } };
    component.imageLoad(event);

  });


  it('Zip too large', () => {

    let testContent = new Blob(["zipFile"]);
    let data = new Array<Blob>();
    data.push(testContent);
    let event = { target: { files: data } };

    Object.defineProperty(event.target.files[0], 'size', { value: 15728641 }); //1 larger
    component.imageLoad(event);

  });
});
