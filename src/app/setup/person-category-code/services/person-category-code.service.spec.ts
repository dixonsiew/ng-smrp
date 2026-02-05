import { TestBed } from '@angular/core/testing';

import { PersonCategoryCodeService } from './person-category-code.service';

describe('PersonCategoryCodeService', () => {
  let service: PersonCategoryCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonCategoryCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
