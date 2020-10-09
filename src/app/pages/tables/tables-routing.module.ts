import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TablesComponent } from "./tables.component";
import { TreeGridComponent } from "./tree-grid/tree-grid.component";
import { ConsentimientoTableComponent } from "./consentimiento-table/consentimiento-table.component";
import { EspecialistaIndexComponent } from "./especialista-index/especialista-index.component";
import { CentrosaludComponent } from "./centrosalud/centrosalud.component";
import { EspecialidadComponent } from "./especialidad/especialidad.component";
import { PacienteComponent } from "./paciente/paciente.component";
import { ProcedimientosComponent } from "./procedimientos/procedimientos.component";
import { ProcedimientoscentrosaludComponent } from "./procedimientoscentrosalud/procedimientoscentrosalud.component";
import { ProcedimientoscentrosaludconsentimientoComponent } from "./procedimientoscentrosaludconsentimiento/procedimientoscentrosaludconsentimiento.component";
import { EspecialistaConsentimientoComponent } from "./especialistaconsentimiento/especialistaconsentimiento.component";
import { CentrosaludEspecialistaComponent } from "./centrosaludEspecialista/centrosaludEspecialista.component";
import { EspecialidadcentrosaludComponent } from "./especialidadcentrosalud/especialidadcentrosalud.component";
import { EspecialidadcentrosaludConsentimientoComponent } from "./especialidadcentrosaludConsentimiento/especialidadcentrosaludConsentimiento.component";
import { PacienteconsentimientoComponent } from "./pacienteconsentimiento/pacienteconsentimiento.component";
import { ConsentimientovwreporteComponent } from "./consentimiento-vwreporte/consentimiento-vwreporte.component";
import { especialidadEspecialistaComponent } from "./especialidadEspecialista/especialidadEspecialista.component";

const routes: Routes = [
  {
    path: "",
    component: TablesComponent,
    children: [
      {
        path: "tree-grid",
        component: TreeGridComponent,
      },
      {
        path: "centrosalud",
        component: CentrosaludComponent,
      },
      {
        path: "centrosaludEspecialista",
        component: CentrosaludEspecialistaComponent,
      },
      {
        path: "consentimiento-table",
        component: ConsentimientoTableComponent,
      },
      {
        path: "consentimiento-vwreporte",
        component: ConsentimientovwreporteComponent,
      },
      {
        path: "especialidad",
        component: EspecialidadComponent,
      },
      {
        path: "especialidadEspecialista",
        component: especialidadEspecialistaComponent,
      },
      {
        path: "especialidadcentrosalud",
        component: EspecialidadcentrosaludComponent,
      },
      {
        path: "especialidadcentrosaludConsentimiento",
        component: EspecialidadcentrosaludConsentimientoComponent,
      },

      {
        path: "especialista-index",
        component: EspecialistaIndexComponent,
      },
      {
        path: "especialistaconsentimiento",
        component: EspecialistaConsentimientoComponent,
      },

      {
        path: "paciente",
        component: PacienteComponent,
      },
      {
        path: "pacienteconsentimiento",
        component: PacienteconsentimientoComponent,
      },
      {
        path: "procedimientos",
        component: ProcedimientosComponent,
      },
      {
        path: "procedimientoscentrosalud",
        component: ProcedimientoscentrosaludComponent,
      },
      {
        path: "procedimientoscentrosaludconsentimiento",
        component: ProcedimientoscentrosaludconsentimientoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}

export const routedComponents = [
  TablesComponent,
  TreeGridComponent,
  ConsentimientoTableComponent,
  ConsentimientovwreporteComponent,
  EspecialistaIndexComponent,
  especialidadEspecialistaComponent,
  CentrosaludComponent,
  EspecialidadComponent,
  PacienteComponent,
  ProcedimientoscentrosaludComponent,
  ProcedimientoscentrosaludconsentimientoComponent,
];
