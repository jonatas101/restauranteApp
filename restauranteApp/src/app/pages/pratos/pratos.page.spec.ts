import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosPage } from './pratos.page';

describe('PratosPage', () => {
  let component: PratosPage;
  let fixture: ComponentFixture<PratosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
