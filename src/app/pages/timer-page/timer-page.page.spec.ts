import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerPagePage } from './timer-page.page';

describe('TimerPagePage', () => {
  let component: TimerPagePage;
  let fixture: ComponentFixture<TimerPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
