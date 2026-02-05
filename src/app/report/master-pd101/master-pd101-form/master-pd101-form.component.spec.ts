import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPd101FormComponent } from './master-pd101-form.component';

describe('MasterPd101FormComponent', () => {
  let component: MasterPd101FormComponent;
  let fixture: ComponentFixture<MasterPd101FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPd101FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPd101FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
