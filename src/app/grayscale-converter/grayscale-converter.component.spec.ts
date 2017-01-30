/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrayscaleConverterComponent } from './grayscale-converter.component';

describe('GrayscaleConverterComponent', () => {
  let component: GrayscaleConverterComponent;
  let fixture: ComponentFixture<GrayscaleConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrayscaleConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrayscaleConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
