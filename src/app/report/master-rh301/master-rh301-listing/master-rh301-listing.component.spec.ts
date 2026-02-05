import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRh301ListingComponent } from './master-rh301-listing.component';

describe('MasterRh301ListingComponent', () => {
  let component: MasterRh301ListingComponent;
  let fixture: ComponentFixture<MasterRh301ListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterRh301ListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRh301ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
