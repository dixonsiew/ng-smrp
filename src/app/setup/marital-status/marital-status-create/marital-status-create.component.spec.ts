import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalStatusCreateComponent } from './marital-status-create.component';

describe('MaritalStatusCreateComponent', () => {
  let component: MaritalStatusCreateComponent;
  let fixture: ComponentFixture<MaritalStatusCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaritalStatusCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritalStatusCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
