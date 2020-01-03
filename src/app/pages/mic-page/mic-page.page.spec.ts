import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicPagePage } from './mic-page.page';

describe('MicPagePage', () => {
  let component: MicPagePage;
  let fixture: ComponentFixture<MicPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
