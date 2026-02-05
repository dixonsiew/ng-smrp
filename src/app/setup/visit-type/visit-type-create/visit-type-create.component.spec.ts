import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitTypeCreateComponent } from './visit-type-create.component';

describe('VisitTypeCreateComponent', () => {
  let component: VisitTypeCreateComponent;
  let fixture: ComponentFixture<VisitTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitTypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
