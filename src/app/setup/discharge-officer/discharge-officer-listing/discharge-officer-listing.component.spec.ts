import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeOfficerListingComponent } from './discharge-officer-listing.component';

describe('DischargeOfficerListingComponent', () => {
  let component: DischargeOfficerListingComponent;
  let fixture: ComponentFixture<DischargeOfficerListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeOfficerListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeOfficerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
