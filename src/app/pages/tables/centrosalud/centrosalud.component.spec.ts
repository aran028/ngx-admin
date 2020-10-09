import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosaludComponent } from './centrosalud.component';

describe('CentrosaludComponent', () => {
  let component: CentrosaludComponent;
  let fixture: ComponentFixture<CentrosaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrosaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
