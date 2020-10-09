import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { especialidadEspecialistaComponent } from "./especialidadEspecialista.component";

describe("especialidadEspecialistaComponent", () => {
  let component: especialidadEspecialistaComponent;
  let fixture: ComponentFixture<especialidadEspecialistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [especialidadEspecialistaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(especialidadEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
