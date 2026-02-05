import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCategoryCodeListingComponent } from './person-category-code-listing.component';

describe('PersonCategoryCodeListingComponent', () => {
  let component: PersonCategoryCodeListingComponent;
  let fixture: ComponentFixture<PersonCategoryCodeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCategoryCodeListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCategoryCodeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
