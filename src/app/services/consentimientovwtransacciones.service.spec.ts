import { TestBed } from "@angular/core/testing";

import { ConsentimientovwtransaccionesService } from "./consentimientovwtransacciones.service";

describe("ConsentimientoService", () => {
  let service: ConsentimientovwtransaccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsentimientovwtransaccionesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
