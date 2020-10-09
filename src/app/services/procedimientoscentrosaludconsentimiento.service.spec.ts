import { TestBed } from '@angular/core/testing';

import { ProcedimientoscentrosaludconsentimientoService } from './procedimientoscentrosaludconsentimiento.service';

describe('ProcedimientoscentrosaludconsentimientoService', () => {
  let service: ProcedimientoscentrosaludconsentimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcedimientoscentrosaludconsentimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
