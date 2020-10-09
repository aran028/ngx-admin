import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsTransHeaderComponent } from './cons-trans-header.component';

describe('ConsTransHeaderComponent', () => {
  let component: ConsTransHeaderComponent;
  let fixture: ComponentFixture<ConsTransHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsTransHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsTransHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
