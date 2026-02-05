import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPd301FormComponent } from './master-pd301-form.component';

describe('MasterPd301FormComponent', () => {
  let component: MasterPd301FormComponent;
  let fixture: ComponentFixture<MasterPd301FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPd301FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPd301FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
