import { TestBed } from '@angular/core/testing';

import { CentrosaludService } from './centrosalud.service';

describe('CentrosaludService', () => {
  let service: CentrosaludService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrosaludService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
