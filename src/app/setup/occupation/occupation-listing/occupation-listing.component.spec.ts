import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationListingComponent } from './occupation-listing.component';

describe('OccupationListingComponent', () => {
  let component: OccupationListingComponent;
  let fixture: ComponentFixture<OccupationListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupationListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
