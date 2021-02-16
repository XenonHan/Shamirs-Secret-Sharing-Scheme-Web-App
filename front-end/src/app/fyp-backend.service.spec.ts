import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { FypBackendService } from './fyp-backend.service';

describe('FypBackendService', () => {
  let service: FypBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(FypBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
