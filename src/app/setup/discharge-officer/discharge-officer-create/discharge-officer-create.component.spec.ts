import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeOfficerCreateComponent } from './discharge-officer-create.component';

describe('DischargeOfficerCreateComponent', () => {
  let component: DischargeOfficerCreateComponent;
  let fixture: ComponentFixture<DischargeOfficerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeOfficerCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeOfficerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
