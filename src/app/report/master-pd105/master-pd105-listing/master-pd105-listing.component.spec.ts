import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPd105ListingComponent } from './master-pd105-listing.component';

describe('MasterPd105ListingComponent', () => {
  let component: MasterPd105ListingComponent;
  let fixture: ComponentFixture<MasterPd105ListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPd105ListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPd105ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
