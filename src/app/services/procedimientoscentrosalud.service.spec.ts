import { TestBed } from '@angular/core/testing';

import { ProcedimientoscentrosaludService } from './procedimientoscentrosalud.service';

describe('ProcedimientoscentrosaludService', () => {
  let service: ProcedimientoscentrosaludService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcedimientoscentrosaludService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
