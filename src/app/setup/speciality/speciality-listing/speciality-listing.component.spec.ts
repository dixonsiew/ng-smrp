import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityListingComponent } from './speciality-listing.component';

describe('SpecialityListingComponent', () => {
  let component: SpecialityListingComponent;
  let fixture: ComponentFixture<SpecialityListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialityListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
