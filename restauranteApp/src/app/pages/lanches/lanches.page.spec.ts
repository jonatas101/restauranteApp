import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchesPage } from './lanches.page';

describe('LanchesPage', () => {
  let component: LanchesPage;
  let fixture: ComponentFixture<LanchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
