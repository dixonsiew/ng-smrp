import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRh301FormComponent } from './master-rh301-form.component';

describe('MasterRh301FormComponent', () => {
  let component: MasterRh301FormComponent;
  let fixture: ComponentFixture<MasterRh301FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterRh301FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRh301FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
