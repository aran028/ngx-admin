import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Especialidadcentrosalud } from "../models/especialidadcentrosalud";

@Injectable({
  providedIn: "root",
})
export class EspecialidadcentrosaludService {
  constructor(private http: HttpClient) {}

  // Todos los registros de la vista
  getEspecialidadCentroSalud(): Observable<Especialidadcentrosalud[]> {
    return this.http.get<Especialidadcentrosalud[]>(
      // "http://api.factureprocessmed.com/api/especialidad_centro_saluds"
      "/apifactprocessmed/especialidadcentrosaluds"
    );
  }
}
