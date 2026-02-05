import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeTypeListingComponent } from './discharge-type-listing.component';

describe('DischargeTypeListingComponent', () => {
  let component: DischargeTypeListingComponent;
  let fixture: ComponentFixture<DischargeTypeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeTypeListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeTypeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
