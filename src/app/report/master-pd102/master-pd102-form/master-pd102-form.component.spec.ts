import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPd102FormComponent } from './master-pd102-form.component';

describe('MasterPd102FormComponent', () => {
  let component: MasterPd102FormComponent;
  let fixture: ComponentFixture<MasterPd102FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPd102FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPd102FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
