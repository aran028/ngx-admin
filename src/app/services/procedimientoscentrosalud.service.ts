import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Procedimientoscentrosalud } from "../models/procedimientoscentrosalud";

@Injectable({
  providedIn: "root",
})
export class ProcedimientoscentrosaludService {
  constructor(private http: HttpClient) {}

  // Obtener todos los registros de procedimientoscentrosalud para alimentar desplegable y seleccionar uno
  getProcedimientoscentrosalud(): Observable<Procedimientoscentrosalud[]> {
    return this.http.get<Procedimientoscentrosalud[]>(
      // "http://api.factureprocessmed.com/api/procedimientos_centro_saluds"
      "/apifactprocessmed/procedimientocentrosaludD"
    );
  }
  // Todos los especialistas de un centro de salud concreto
  getProcedimientocentrosaludId(
    id: number
  ): Observable<Procedimientoscentrosalud[]> {
    return this.http.get<Procedimientoscentrosalud[]>(
      // "http://api.factureprocessmed.com/api/procedimientos_centro_saluds/" + id
      "/apifactprocessmed/procedimientocentrosalud/" + id
    );
  }
}
