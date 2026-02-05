import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPd301ListingComponent } from './master-pd301-listing.component';

describe('MasterPd301ListingComponent', () => {
  let component: MasterPd301ListingComponent;
  let fixture: ComponentFixture<MasterPd301ListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPd301ListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPd301ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
