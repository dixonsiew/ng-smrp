import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipListingComponent } from './relationship-listing.component';

describe('RelationshipListingComponent', () => {
  let component: RelationshipListingComponent;
  let fixture: ComponentFixture<RelationshipListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationshipListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
