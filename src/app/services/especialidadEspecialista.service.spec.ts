import { TestBed } from "@angular/core/testing";

import { EspecialidadEspecialistaService } from "./especialidadEspecialista.service";

describe("EspecialistaespecialidadService", () => {
  let service: EspecialidadEspecialistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecialidadEspecialistaService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
