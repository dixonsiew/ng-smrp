import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmStatusListingComponent } from './adm-status-listing.component';

describe('AdmStatusListingComponent', () => {
  let component: AdmStatusListingComponent;
  let fixture: ComponentFixture<AdmStatusListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmStatusListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmStatusListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
