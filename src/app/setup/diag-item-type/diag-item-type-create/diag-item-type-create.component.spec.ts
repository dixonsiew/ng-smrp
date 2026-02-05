import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagItemTypeCreateComponent } from './diag-item-type-create.component';

describe('DiagItemTypeCreateComponent', () => {
  let component: DiagItemTypeCreateComponent;
  let fixture: ComponentFixture<DiagItemTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagItemTypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagItemTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
