import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmStatusCreateComponent } from './adm-status-create.component';

describe('AdmStatusCreateComponent', () => {
  let component: AdmStatusCreateComponent;
  let fixture: ComponentFixture<AdmStatusCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmStatusCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmStatusCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
