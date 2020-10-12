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
         "/apifactprocessmed/especialidadcentrosaluds",
    );
  }
}
