import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdTypeListingComponent } from './id-type-listing.component';

describe('IdTypeListingComponent', () => {
  let component: IdTypeListingComponent;
  let fixture: ComponentFixture<IdTypeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdTypeListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdTypeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
