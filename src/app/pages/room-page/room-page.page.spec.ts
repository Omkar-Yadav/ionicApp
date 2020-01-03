import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPagePage } from './room-page.page';

describe('RoomPagePage', () => {
  let component: RoomPagePage;
  let fixture: ComponentFixture<RoomPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
