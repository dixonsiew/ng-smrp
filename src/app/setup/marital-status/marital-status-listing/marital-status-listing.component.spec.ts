import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalStatusListingComponent } from './marital-status-listing.component';

describe('MaritalStatusListingComponent', () => {
  let component: MaritalStatusListingComponent;
  let fixture: ComponentFixture<MaritalStatusListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaritalStatusListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritalStatusListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
