import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientoscentrosaludconsentimientoComponent } from './procedimientoscentrosaludconsentimiento.component';

describe('ProcedimientoscentrosaludconsentimientoComponent', () => {
  let component: ProcedimientoscentrosaludconsentimientoComponent;
  let fixture: ComponentFixture<ProcedimientoscentrosaludconsentimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimientoscentrosaludconsentimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientoscentrosaludconsentimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
