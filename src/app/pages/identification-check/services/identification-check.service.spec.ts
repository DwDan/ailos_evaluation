import { TestBed } from '@angular/core/testing';

import { IdentificationCheckService } from './identification-check.service';

describe('IdentificationCheckService', () => {
  let service: IdentificationCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificationCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
