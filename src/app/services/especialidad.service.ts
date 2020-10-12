import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Especialidad } from "../models/especialidad";

@Injectable({
  providedIn: "root",
})
export class EspecialidadService {
  constructor(private http: HttpClient) {}
  // Todos los registros de la vista
  getEspecialidad(): Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>(
          "/apifactprocessmed/especialidads",
    );
  }
}
