import { TestBed } from '@angular/core/testing';

import { PacienteconsentimientoService } from './pacienteconsentimiento.service';

describe('PacienteconsentimientoService', () => {
  let service: PacienteconsentimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteconsentimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
