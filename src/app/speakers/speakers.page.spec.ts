import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersPage } from './speakers.page';

describe('SpeakersPage', () => {
  let component: SpeakersPage;
  let fixture: ComponentFixture<SpeakersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
