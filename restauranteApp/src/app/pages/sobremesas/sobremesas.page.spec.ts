import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremesasPage } from './sobremesas.page';

describe('SobremesasPage', () => {
  let component: SobremesasPage;
  let fixture: ComponentFixture<SobremesasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobremesasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobremesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
