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
         "/apifactprocessmed/procedimientocentrosaludD",
    );
  }
  // Todos los especialistas de un centro de salud concreto
  getProcedimientocentrosaludId(
    // tslint:disable-next-line: trailing-comma
    id: number
  ): Observable<Procedimientoscentrosalud[]> {
    return this.http.get<Procedimientoscentrosalud[]>(
          "/apifactprocessmed/procedimientocentrosalud/" + id,
    );
  }
}
