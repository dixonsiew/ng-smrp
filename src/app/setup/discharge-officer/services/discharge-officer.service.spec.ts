import { TestBed } from '@angular/core/testing';

import { DischargeOfficerService } from './discharge-officer.service';

describe('DischargeOfficerService', () => {
  let service: DischargeOfficerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DischargeOfficerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
