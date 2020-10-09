import { TestBed } from '@angular/core/testing';

import { EspecialistaconsentimientoService } from './especialistaconsentimiento.service';

describe('EspecialistaconsentimientoService', () => {
  let service: EspecialistaconsentimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecialistaconsentimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
