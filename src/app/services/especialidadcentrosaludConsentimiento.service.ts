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
      // "http://api.factureprocessmed.com/api/especialidad_centro_saluds" /
      "apifactprocessmed/especialidadcentrosaluds"
    );
  }
  // Todos los registros de consentimientos con la especialidad_centro_salud seleccionada
  getConsentimientoEspecialidadCentroSalud(
    id: number
  ): Observable<Consentimiento[]> {
    return this.http.get<Consentimiento[]>(
      //"http://api.factureprocessmed.com/api/especialidad_centro_saluds/" +
      //  id +
      //  "/consentimientos"
      "/apifactprocessmed/especialidadcentrosaludconsentimientos/" + id
    );
  }
}
