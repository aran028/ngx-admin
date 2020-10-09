import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Procedimientos } from "../models/procedimientos";

@Injectable({
  providedIn: "root",
})
export class ProcedimientosService {
  constructor(private http: HttpClient) {}
  //Todos los registros de la vista
  getProcedimientos(): Observable<Procedimientos[]> {
    return this.http.get<Procedimientos[]>(
      // "http://api.factureprocessmed.com/api/procedimientos"
      "/apifactprocessmed/procedimientos"
    );
  }
}
