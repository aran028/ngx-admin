import { Injectable } from "@angular/core";
import { Especialista } from "../models/especialista";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/Rx";

@Injectable({
  providedIn: "root",
})
export class EspecialistaService {
  constructor(private http: HttpClient) {}
  // Todos los registros de la vista
  getEspecialitas(): Observable<Especialista[]> {
    return this.http.get<Especialista[]>(
            "/apifactprocessmed/especialistas",
    );
  }
}
