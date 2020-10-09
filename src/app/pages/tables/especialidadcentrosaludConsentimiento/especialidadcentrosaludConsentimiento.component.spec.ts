import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EspecialidadcentrosaludConsentimientoComponent } from "./especialidadcentrosaludConsentimiento.component";

describe("EspecialidadcentrosaludConsentimientoComponent", () => {
  let component: EspecialidadcentrosaludConsentimientoComponent;
  let fixture: ComponentFixture<EspecialidadcentrosaludConsentimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadcentrosaludConsentimientoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      EspecialidadcentrosaludConsentimientoComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
