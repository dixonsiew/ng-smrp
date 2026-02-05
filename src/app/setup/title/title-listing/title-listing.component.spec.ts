import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleListingComponent } from './title-listing.component';

describe('TitleListingComponent', () => {
  let component: TitleListingComponent;
  let fixture: ComponentFixture<TitleListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
