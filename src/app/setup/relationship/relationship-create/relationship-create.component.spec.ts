import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipCreateComponent } from './relationship-create.component';

describe('RelationshipCreateComponent', () => {
  let component: RelationshipCreateComponent;
  let fixture: ComponentFixture<RelationshipCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationshipCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
