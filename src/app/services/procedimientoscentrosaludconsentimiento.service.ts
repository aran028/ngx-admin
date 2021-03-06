import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Procedimientoscentrosalud } from "../models/procedimientoscentrosalud";
import { Consentimiento } from "../models/consentimiento";

@Injectable({
  providedIn: "root",
})
export class ProcedimientoscentrosaludconsentimientoService {
  constructor(private http: HttpClient) {}

  // Obtener todos los registros de procedimientos_centro_salud para alimentar desplegable y seleccionar uno
  getProcedimientoscentrosalud(): Observable<Procedimientoscentrosalud[]> {
    return this.http.get<Procedimientoscentrosalud[]>(
          "/apifactprocessmed/procedimientocentrosaludD",
    );
  }
  // Todos los consentimientos de un procedimiento_centro_salud_seleccionado
  getProcedimientocentrosaludConsentimientos(
    // tslint:disable-next-line: trailing-comma
    id: number
  ): Observable<Consentimiento[]> {
    return this.http.get<Consentimiento[]>(
      "/apifactprocessmed/procedimientocentrosaludconsentimientos/" + id,
    );
  }
}
