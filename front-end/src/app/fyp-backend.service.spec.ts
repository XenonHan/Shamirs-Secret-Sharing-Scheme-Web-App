import { TestBed } from '@angular/core/testing';

import { FypBackendService } from './fyp-backend.service';

describe('FypBackendService', () => {
  let service: FypBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FypBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
