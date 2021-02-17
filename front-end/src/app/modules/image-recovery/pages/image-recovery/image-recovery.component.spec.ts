import { async, ComponentFixture, TestBed,fakeAsync } from '@angular/core/testing';

import { ImageRecoveryComponent } from './image-recovery.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { of, Observable,throwError } from 'rxjs';

describe('ImageRecoveryComponent', () => {
  let component: ImageRecoveryComponent;
  let fixture: ComponentFixture<ImageRecoveryComponent>;
  let service: FypBackendService;

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
    service=TestBed.inject(FypBackendService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Image reovery other', () => {
    component.secret;
    component.imageForm.controls['threshold'].setValue(7);
    component.isChange();
    component.imageForm.controls['threshold'].setValue(0);
    component.isChange();
  });

  it('Image Recovery OK', fakeAsync(() => {


    component.imageForm.controls['threshold'].setValue(1);
    component.isChange();
    spyOn(service, 'imageRecovery').and.returnValue(of({'secret': 'test'})); //{'share0': 'AafjCPc='} -> test
    component.recoveryText();
    expect(service.imageRecovery).toHaveBeenCalled();

  }));

  it('Image Recovery error', fakeAsync(() => {


    component.imageForm.controls['threshold'].setValue(2);
    component.isChange();
    spyOn(service, 'imageRecovery').and.returnValue(throwError( "" )); //error
    component.recoveryText();
    expect(service.imageRecovery).toHaveBeenCalled();

  }));

  it('Image share load OK', () => {
    component.imageForm.controls['threshold'].setValue(1);
    component.shareVaild=0;
    let testContent= new Blob(["testShare"]);
    let data=new Array<Blob>();
    data.push(testContent);
    let event={ target: { files: data }};
    Object.defineProperty(event.target.files[0], 'type', {value: "image/jpeg"}); 
    component.isChange();
    component.imageLoad(event,1);
    component.imageForm.controls['threshold'].setValue(7);//else path
    component.imageLoad(event,1);


  });

  it('Image share load error', () => {
    let testContent= new Blob(["testShare"]);
    component.imageLoad(null,1);
    let data=new Array<Blob>();
    let event={ target: { files: data }};
    component.imageLoad(event,1);
    data.push(testContent);
    component.imageLoad(event,1);

  });


});
