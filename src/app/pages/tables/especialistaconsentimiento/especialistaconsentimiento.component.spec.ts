import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EspecialistaConsentimientoComponent } from "./especialistaconsentimiento.component";

describe("Especialista.ConsentimientoComponent", () => {
  let component: EspecialistaConsentimientoComponent;
  let fixture: ComponentFixture<EspecialistaConsentimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialistaConsentimientoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaConsentimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
