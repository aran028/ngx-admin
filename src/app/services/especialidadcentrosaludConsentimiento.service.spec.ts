import { TestBed } from "@angular/core/testing";

import { EspecialidadcentrosaludConsentimientoService } from "./especialidadcentrosaludConsentimiento.service";

describe("EspecialidadcentrosaludConsentimientoService", () => {
  let service: EspecialidadcentrosaludConsentimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecialidadcentrosaludConsentimientoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
