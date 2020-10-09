import { NgModule } from "@angular/core";
import { NbCardModule, NbIconModule, NbInputModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../../@theme/theme.module";
import { TablesRoutingModule, routedComponents } from "./tables-routing.module";
import { CentrosaludComponent } from "./centrosalud/centrosalud.component";
import { EspecialidadComponent } from "./especialidad/especialidad.component";
import { PacienteComponent } from "./paciente/paciente.component";
import { ProcedimientosComponent } from "./procedimientos/procedimientos.component";
import { EspecialistaConsentimientoComponent } from "./especialistaconsentimiento/especialistaconsentimiento.component";
import { CentrosaludEspecialistaComponent } from "./centrosaludEspecialista/centrosaludEspecialista.component";
import { EspecialidadcentrosaludComponent } from "./especialidadcentrosalud/especialidadcentrosalud.component";
import { PacienteconsentimientoComponent } from "./pacienteconsentimiento/pacienteconsentimiento.component";
import { especialidadEspecialistaComponent } from "./especialidadEspecialista/especialidadEspecialista.component";
import { EspecialidadcentrosaludConsentimientoComponent } from "./especialidadcentrosaludConsentimiento/especialidadcentrosaludConsentimiento.component";
import { ProcedimientoscentrosaludComponent } from "./procedimientoscentrosalud/procedimientoscentrosalud.component";
import { ProcedimientoscentrosaludconsentimientoComponent } from "./procedimientoscentrosaludconsentimiento/procedimientoscentrosaludconsentimiento.component";

@NgModule({
  imports: [
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    CentrosaludComponent,
    EspecialidadComponent,
    PacienteComponent,
    ProcedimientosComponent,
    EspecialistaConsentimientoComponent,
    CentrosaludEspecialistaComponent,
    EspecialidadcentrosaludComponent,
    PacienteconsentimientoComponent,
    especialidadEspecialistaComponent,
    EspecialidadcentrosaludConsentimientoComponent,
    ProcedimientoscentrosaludComponent,
    ProcedimientoscentrosaludconsentimientoComponent,
  ],
})
export class TablesModule {}
