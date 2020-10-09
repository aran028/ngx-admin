import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CentrosaludEspecialistaComponent } from "./centrosaludEspecialista.component";

describe("CentrosaludEspecialistaComponent", () => {
  let component: CentrosaludespecialistaComponent;
  let fixture: ComponentFixture<CentrosaludespecialistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CentrosaludEspecialistaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosaludEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
