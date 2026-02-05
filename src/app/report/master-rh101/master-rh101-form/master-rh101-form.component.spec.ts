import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRh101FormComponent } from './master-rh101-form.component';

describe('MasterRh101FormComponent', () => {
  let component: MasterRh101FormComponent;
  let fixture: ComponentFixture<MasterRh101FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterRh101FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRh101FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
