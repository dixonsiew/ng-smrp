import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCreateComponent } from './title-create.component';

describe('TitleCreateComponent', () => {
  let component: TitleCreateComponent;
  let fixture: ComponentFixture<TitleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
