import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionListingComponent } from './religion-listing.component';

describe('ReligionListingComponent', () => {
  let component: ReligionListingComponent;
  let fixture: ComponentFixture<ReligionListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligionListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
