import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Paciente } from "../models/paciente";
import { Observable, throwError } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/Rx";

@Injectable({
  providedIn: "root",
})
export class PacienteService {
  constructor(private http: HttpClient) {}
  // Todos los registros de la vista
  getPaciente(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(
           "/apifactprocessmed/pacientes",
    );
  }
}
