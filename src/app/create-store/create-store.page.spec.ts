import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStorePage } from './create-store.page';

describe('CreateStorePage', () => {
  let component: CreateStorePage;
  let fixture: ComponentFixture<CreateStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
