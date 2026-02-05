import { TestBed } from '@angular/core/testing';

import { AdmStatusService } from './adm-status.service';

describe('AdmStatusService', () => {
  let service: AdmStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
