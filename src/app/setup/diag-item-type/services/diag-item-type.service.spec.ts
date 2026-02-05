import { TestBed } from '@angular/core/testing';

import { DiagItemTypeService } from './diag-item-type.service';

describe('DiagItemTypeService', () => {
  let service: DiagItemTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagItemTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
