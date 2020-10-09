import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pacienteconsentimiento } from "../models/pacienteconsentimiento";
import { Observable, throwError } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Paciente } from "../models/paciente";
import { Consentimiento } from "../models/consentimiento";

@Injectable({
  providedIn: "root",
})
export class PacienteconsentimientoService {
  constructor(private http: HttpClient) {}

  //Todos los registros de pacientes para el desplegable
  getPacienteD(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(
      //"http://api.factureprocessmed.com/api/pacientes"
      "/apifactprocessmed/pacientesD"
    );
  }
  //Todos los registros de consentimientos de un paciente indicado con nº historia clinica
  getPacienteConsentimiento(id: number): Observable<Consentimiento[]> {
    return this.http.get<Consentimiento[]>(
      //"http://api.factureprocessmed.com/api/pacientes/" +
      //  id +
      //  "/consentimientos"
      "/apifactprocessmed/pacienteconsentimientos/" + id
    );
  }
}
