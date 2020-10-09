import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientoscentrosaludComponent } from './procedimientoscentrosalud.component';

describe('ProcedimientoscentrosaludComponent', () => {
  let component: ProcedimientoscentrosaludComponent;
  let fixture: ComponentFixture<ProcedimientoscentrosaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimientoscentrosaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientoscentrosaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
