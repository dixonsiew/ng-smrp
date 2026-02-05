import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPd101ListingComponent } from './master-pd101-listing.component';

describe('MasterPd101ListingComponent', () => {
  let component: MasterPd101ListingComponent;
  let fixture: ComponentFixture<MasterPd101ListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPd101ListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPd101ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
