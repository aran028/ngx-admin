import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteconsentimientoComponent } from './pacienteconsentimiento.component';

describe('PacienteconsentimientoComponent', () => {
  let component: PacienteconsentimientoComponent;
  let fixture: ComponentFixture<PacienteconsentimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteconsentimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteconsentimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
