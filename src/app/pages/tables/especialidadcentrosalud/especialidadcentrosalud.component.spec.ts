import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadcentrosaludComponent } from './especialidadcentrosalud.component';

describe('EspecialidadcentrosaludComponent', () => {
  let component: EspecialidadcentrosaludComponent;
  let fixture: ComponentFixture<EspecialidadcentrosaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialidadcentrosaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadcentrosaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
