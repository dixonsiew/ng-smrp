import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPd102ListingComponent } from './master-pd102-listing.component';

describe('MasterPd102ListingComponent', () => {
  let component: MasterPd102ListingComponent;
  let fixture: ComponentFixture<MasterPd102ListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPd102ListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPd102ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
