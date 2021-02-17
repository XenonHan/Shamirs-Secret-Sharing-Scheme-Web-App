import { async, ComponentFixture, TestBed,fakeAsync } from '@angular/core/testing';

import { ZipRecoveryComponent } from './zip-recovery.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { of, Observable,throwError } from 'rxjs';

describe('ZipRecoveryComponent', () => {
  let component: ZipRecoveryComponent;
  let fixture: ComponentFixture<ZipRecoveryComponent>;
  let service: FypBackendService;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipRecoveryComponent,FaIconComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule,FlexLayoutModule,MatDividerModule  ],
      providers: [ FypBackendService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(FypBackendService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Zip reovery other', () => {
    component.secret;
    component.zipForm.controls['threshold'].setValue(7);
    component.isChange();
    component.zipForm.controls['threshold'].setValue(0);
    component.isChange();
  });

  it('Zip Recovery OK', fakeAsync(() => {


    component.zipForm.controls['threshold'].setValue(1);
    component.isChange();
    spyOn(service, 'zipRecovery').and.returnValue(of({'secret': 'test'})); //{'share0': 'AafjCPc='} -> test
    component.recoveryText();
    expect(service.zipRecovery).toHaveBeenCalled();

  }));

  it('Zip Recovery error', fakeAsync(() => {


    component.zipForm.controls['threshold'].setValue(2);
    component.isChange();
    spyOn(service, 'zipRecovery').and.returnValue(throwError( "" )); //error
    component.recoveryText();
    expect(service.zipRecovery).toHaveBeenCalled();

  }));

  it('Zip share load OK', () => {
    component.zipForm.controls['threshold'].setValue(1);
    component.shareVaild=0;
    let testContent= new Blob(["testShare"]);
    let data=new Array<Blob>();
    data.push(testContent);
    let event={ target: { files: data }};
    Object.defineProperty(event.target.files[0], 'type', {value: "application/zip"}); 
    component.isChange();
    component.imageLoad(event,1);
    component.zipForm.controls['threshold'].setValue(7);//else path
    component.imageLoad(event,1);


  });

  it('Zip share load error', () => {
    let testContent= new Blob(["testShare"]);
    component.imageLoad(null,1);
    let data=new Array<Blob>();
    let event={ target: { files: data }};
    component.imageLoad(event,1);
    data.push(testContent);
    component.imageLoad(event,1);

  });
  it('Zip too large', () => {
    
    let testContent= new Blob(["zipFile"]);
    let data=new Array<Blob>();
    data.push(testContent);
    let event={ target: { files: data }};
    
    Object.defineProperty(event.target.files[0], 'size', {value: 15728641}); //1 larger
    Object.defineProperty(event.target.files[0], 'type', {value: "application/zip"}); 
      component.imageLoad(event,1);

  });

});
