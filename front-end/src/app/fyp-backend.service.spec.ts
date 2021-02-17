import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController,  } from '@angular/common/http/testing';
import { FypBackendService } from './fyp-backend.service';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
export interface testData{
  share0:string;
  share1:string;
  share2:string;
}
export interface testSecret{
  secret:string;

}
describe('FypBackendService', () => {
  let service: FypBackendService;
  let httpTestingController:HttpTestingController;
  const shares:testData[]=[{share0: 'AafjCPc=',share1: 'AafjCPc=', share2: 'AafjCPc='}];
  const secret:testSecret[]=[{secret:"test"}];
  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(FypBackendService);
    httpTestingController=TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpTestingController.verify();
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Text encryption OK', () => {
    service.textEncryption(1).subscribe(testData=>{
      expect(testData).toEqual(shares);
    });
    const request=httpTestingController.expectOne(service.apiUrl+ '/TextApi/encryption');


    request.flush(shares);

  });

  it('Image encryption OK', () => {
    service.imageEncryption(null,1,1).subscribe(testData=>{
      expect(testData).toEqual(shares);
    });
    const request=httpTestingController.expectOne(service.apiUrl+ '/ImageApi/encryption/1/1');

    request.flush(shares);

  });

  it('Zip encryption OK', () => {
    service.zipEncryption(1,null,1,1).subscribe(testData=>{
      expect(testData).toEqual(shares);
    });
    const request=httpTestingController.expectOne(service.apiUrl+ '/ZipApi/encryption/1/1');

    request.flush(shares);

  });

  it('Zip encryption too large', () => {
    service.zipEncryption(15728641,null,1,1).subscribe(testData=>{
      expect(testData).toEqual(shares);
    });
    const request=httpTestingController.expectOne(service.apiUrl+ '/ZipApi/encryption/1/1');

    request.flush(shares);

  });

  it('Zip recovery OK', () => {
    service.zipRecovery(null,1).subscribe(testData=>{
      expect(testData).toEqual(secret);
    });
    const request=httpTestingController.expectOne(service.apiUrl+ '/ZipApi/recovery/1');

    request.flush(secret);

  });

  it('Image recovery OK', () => {
    service.imageRecovery(null,1).subscribe(testData=>{
      expect(testData).toEqual(secret);
    });
    const request=httpTestingController.expectOne(service.apiUrl+ '/ImageApi/recovery/1');

    request.flush(secret);

  });

  it('Text recovery OK', () => {
    service.textRecovery(null,1).subscribe(testData=>{
      expect(testData).toEqual(secret);
    });
    const request=httpTestingController.expectOne(service.apiUrl+ '/TextApi/recovery/1');

    request.flush(secret);

  });

});
