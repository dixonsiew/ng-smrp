import { TestBed } from '@angular/core/testing';

import { EthnicGroupService } from './ethnic-group.service';

describe('EthnicGroupService', () => {
  let service: EthnicGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EthnicGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
