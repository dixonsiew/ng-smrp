import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthnicGroupListingComponent } from './ethnic-group-listing.component';

describe('EthnicGroupListingComponent', () => {
  let component: EthnicGroupListingComponent;
  let fixture: ComponentFixture<EthnicGroupListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthnicGroupListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthnicGroupListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
