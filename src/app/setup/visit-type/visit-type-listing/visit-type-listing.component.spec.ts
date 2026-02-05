import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitTypeListingComponent } from './visit-type-listing.component';

describe('VisitTypeListingComponent', () => {
  let component: VisitTypeListingComponent;
  let fixture: ComponentFixture<VisitTypeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitTypeListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitTypeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
