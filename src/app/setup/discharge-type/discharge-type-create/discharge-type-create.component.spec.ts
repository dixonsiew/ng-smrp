import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeTypeCreateComponent } from './discharge-type-create.component';

describe('DischargeTypeCreateComponent', () => {
  let component: DischargeTypeCreateComponent;
  let fixture: ComponentFixture<DischargeTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeTypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
