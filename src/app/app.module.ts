/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { ChartsModule } from "ng2-charts";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ConsentimientovwreporteService } from "./services/consentimientovwreporte.service";
import { ConsentimientovwtransaccionesService } from "./services/consentimientovwtransacciones.service";
import { ExporterService } from "./services/exporter.service";
import { EspecialistaService } from "./services/especialista.service";
import { EspecialidadEspecialistaService } from "./services/especialidadEspecialista.service";
import { PacienteService } from "./services/paciente.service";
import { EspecialidadService } from "./services/especialidad.service";
import { EspecialistaconsentimientoService } from "./services/especialistaconsentimiento.service";
import { CentrosaludespecialistaService } from "./services/centrosaludEspecialista.service";
import { EspecialidadcentrosaludService } from "./services/especialidadcentrosalud.service";
import { EspecialidadcentrosaludConsentimientoService } from "./services/especialidadcentrosaludConsentimiento.service";
import { fromPromise } from "rxjs/internal-compatibility";
import { PacienteconsentimientoService } from "./services/pacienteconsentimiento.service";
import { ProcedimientoscentrosaludService } from "./services/procedimientoscentrosalud.service";
import { ProcedimientoscentrosaludconsentimientoService } from "./services/procedimientoscentrosaludconsentimiento.service";

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from "@nebular/theme";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY",
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [
    ConsentimientovwreporteService,
    ConsentimientovwtransaccionesService,
    ExporterService,
    EspecialistaService,
    EspecialidadEspecialistaService,
    EspecialidadService,
    PacienteService,
    EspecialistaconsentimientoService,
    CentrosaludespecialistaService,
    EspecialidadcentrosaludService,
    EspecialidadcentrosaludConsentimientoService,
    PacienteconsentimientoService,
    ProcedimientoscentrosaludService,
    ProcedimientoscentrosaludconsentimientoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
