import { async, ComponentFixture, TestBed,fakeAsync } from '@angular/core/testing';

import { TextRecoveryComponent } from './text-recovery.component';

import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from '../../../../fyp-backend.service';
import { ReactiveFormsModule  } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { of, Observable,throwError } from 'rxjs';

describe('TextRecoveryComponent', () => {
  let component: TextRecoveryComponent;
  let fixture: ComponentFixture<TextRecoveryComponent>;
  let service: FypBackendService;

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
    service=TestBed.inject(FypBackendService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Text Recovery OK', fakeAsync(() => {


    component.textForm.controls['threshold'].setValue(1);
    component.isChange();
    spyOn(service, 'textRecovery').and.returnValue(of({'secret': 'test'})); //{'share0': 'AafjCPc='} -> test
    component.recoveryText();
    expect(service.textRecovery).toHaveBeenCalled();

  }));

  it('Text Recovery error', fakeAsync(() => {


    component.textForm.controls['threshold'].setValue(2);
    component.isChange();
    spyOn(service, 'textRecovery').and.returnValue(throwError( "" )); //error
    component.recoveryText();
    expect(service.textRecovery).toHaveBeenCalled();

  }));

  it('test reovery other', () => {
    component.secret;
    component.isClick();
    component.textForm.controls['threshold'].setValue(0);
    component.isChange();

  });

  it('Text share load OK', () => {
    component.textForm.controls['threshold'].setValue(1);
    component.shareVaild=0;
    let testContent= new Blob(["testShare"]);
    let data=new Array<Blob>();
    data.push(testContent);
    let event={ target: { files: data }};
    Object.defineProperty(event.target.files[0], 'type', {value: "text/plain"}); 
    component.isChange();
    component.textLoad(event,1);
    component.textForm.controls['threshold'].setValue(7);//else path
    component.textLoad(event,1);


  });

  it('Text share load error', () => {
    let testContent= new Blob(["testShare"]);
    component.textLoad(null,1);
    let data=new Array<Blob>();
    let event={ target: { files: data }};
    component.textLoad(event,1);
    data.push(testContent);
    component.textLoad(event,1);

  });
});
