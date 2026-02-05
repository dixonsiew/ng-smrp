import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardClassListingComponent } from './ward-class-listing.component';

describe('WardClassListingComponent', () => {
  let component: WardClassListingComponent;
  let fixture: ComponentFixture<WardClassListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardClassListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardClassListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
