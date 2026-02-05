import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRh101ListingComponent } from './master-rh101-listing.component';

describe('MasterRh101ListingComponent', () => {
  let component: MasterRh101ListingComponent;
  let fixture: ComponentFixture<MasterRh101ListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterRh101ListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRh101ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
