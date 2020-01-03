import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesPagePage } from './devices-page.page';

describe('DevicesPagePage', () => {
  let component: DevicesPagePage;
  let fixture: ComponentFixture<DevicesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
