import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Consentimiento } from "../models/consentimiento";
import { Especialidadcentrosalud } from "../models/especialidadcentrosalud";
import "rxjs/Rx";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EspecialidadcentrosaludConsentimientoService {
  constructor(private http: HttpClient) {}

  // Todos los registros de especialidadCentroSalud para cargar el desplegable
  getEspecialidadCentroSalud(): Observable<Especialidadcentrosalud[]> {
    return this.http.get<Especialidadcentrosalud[]>(
          "apifactprocessmed/especialidadcentrosaluds",
    );
  }
  // Todos los registros de consentimientos con la especialidad_centro_salud seleccionada
  getConsentimientoEspecialidadCentroSalud(
    // tslint:disable-next-line: trailing-comma
    id: number
  ): Observable<Consentimiento[]> {
    return this.http.get<Consentimiento[]>(
           "/apifactprocessmed/especialidadcentrosaludconsentimientos/" + id,
    );
  }
}
