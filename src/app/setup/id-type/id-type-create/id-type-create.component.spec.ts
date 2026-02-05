import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdTypeCreateComponent } from './id-type-create.component';

describe('IdTypeCreateComponent', () => {
  let component: IdTypeCreateComponent;
  let fixture: ComponentFixture<IdTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdTypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
