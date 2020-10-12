import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Especialidad } from "../models/especialidad";
import { Especialista } from "../models/especialista";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EspecialidadEspecialistaService {
  constructor(private http: HttpClient) {}

  // Desplegable de especialidad
  getEspe(): Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>(
         "/apifactprocessmed/especialidads",
    );
  }
  // Seleccionada un especialidad en el desplegable devuelve todos sus especialistas
  getEspecialistaEspecialidad(id: number): Observable<Especialista[]> {
    return this.http.get<Especialista[]>(
           "/apifactprocessmed/especialidadespecialistas/" + id,
    );
  }
}
