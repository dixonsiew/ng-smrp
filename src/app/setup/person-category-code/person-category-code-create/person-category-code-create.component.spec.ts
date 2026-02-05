import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCategoryCodeCreateComponent } from './person-category-code-create.component';

describe('PersonCategoryCodeCreateComponent', () => {
  let component: PersonCategoryCodeCreateComponent;
  let fixture: ComponentFixture<PersonCategoryCodeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCategoryCodeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCategoryCodeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
