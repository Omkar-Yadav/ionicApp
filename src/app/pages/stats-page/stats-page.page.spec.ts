import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPagePage } from './stats-page.page';

describe('StatsPagePage', () => {
  let component: StatsPagePage;
  let fixture: ComponentFixture<StatsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
