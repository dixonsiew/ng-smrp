import { TestBed } from '@angular/core/testing';

import { WardClassService } from './ward-class.service';

describe('WardClassService', () => {
  let service: WardClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WardClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
