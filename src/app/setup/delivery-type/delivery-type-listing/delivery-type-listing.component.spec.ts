import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTypeListingComponent } from './delivery-type-listing.component';

describe('DeliveryTypeListingComponent', () => {
  let component: DeliveryTypeListingComponent;
  let fixture: ComponentFixture<DeliveryTypeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryTypeListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryTypeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
