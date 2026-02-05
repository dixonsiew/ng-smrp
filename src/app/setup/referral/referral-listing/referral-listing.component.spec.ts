import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralListingComponent } from './referral-listing.component';

describe('ReferralListingComponent', () => {
  let component: ReferralListingComponent;
  let fixture: ComponentFixture<ReferralListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
