import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationCreateComponent } from './occupation-create.component';

describe('OccupationCreateComponent', () => {
  let component: OccupationCreateComponent;
  let fixture: ComponentFixture<OccupationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
