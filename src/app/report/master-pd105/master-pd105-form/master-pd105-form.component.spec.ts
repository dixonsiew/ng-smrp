import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPd105FormComponent } from './master-pd105-form.component';

describe('MasterPd105FormComponent', () => {
  let component: MasterPd105FormComponent;
  let fixture: ComponentFixture<MasterPd105FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPd105FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPd105FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
