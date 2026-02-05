import { TestBed } from '@angular/core/testing';

import { DischargeTypeService } from './discharge-type.service';

describe('DischargeTypeService', () => {
  let service: DischargeTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DischargeTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
