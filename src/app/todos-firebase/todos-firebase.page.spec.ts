import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosFirebasePage } from './todos-firebase.page';

describe('TodosFirebasePage', () => {
  let component: TodosFirebasePage;
  let fixture: ComponentFixture<TodosFirebasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosFirebasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosFirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
