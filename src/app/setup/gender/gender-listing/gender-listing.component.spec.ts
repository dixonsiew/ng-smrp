import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderListingComponent } from './gender-listing.component';

describe('GenderListingComponent', () => {
  let component: GenderListingComponent;
  let fixture: ComponentFixture<GenderListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
