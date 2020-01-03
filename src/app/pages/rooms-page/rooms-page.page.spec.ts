import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsPagePage } from './rooms-page.page';

describe('RoomsPagePage', () => {
  let component: RoomsPagePage;
  let fixture: ComponentFixture<RoomsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
