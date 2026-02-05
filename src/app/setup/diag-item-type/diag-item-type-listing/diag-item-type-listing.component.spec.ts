import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagItemTypeListingComponent } from './diag-item-type-listing.component';

describe('DiagItemTypeListingComponent', () => {
  let component: DiagItemTypeListingComponent;
  let fixture: ComponentFixture<DiagItemTypeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagItemTypeListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagItemTypeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
