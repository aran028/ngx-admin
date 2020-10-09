import { TestBed } from '@angular/core/testing';

import { EspecialidadcentrosaludService } from './especialidadcentrosalud.service';

describe('EspecialidadcentrosaludService', () => {
  let service: EspecialidadcentrosaludService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecialidadcentrosaludService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
