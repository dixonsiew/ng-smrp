import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardClassCreateComponent } from './ward-class-create.component';

describe('WardClassCreateComponent', () => {
  let component: WardClassCreateComponent;
  let fixture: ComponentFixture<WardClassCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardClassCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardClassCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
