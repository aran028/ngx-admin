import { TestBed } from "@angular/core/testing";
import { CentrosaludEspecialistaService } from "./centrosaludEspecialista.service";

describe("CentrosaludEspecialistaService", () => {
  let service: CentrosaludEspecialistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrosaludEspecialistaService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
