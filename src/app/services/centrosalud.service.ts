import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Centrosalud } from "../models/centrosalud";
@Injectable({
  providedIn: "root",
})
export class CentrosaludService {
  constructor(private http: HttpClient) {}

  // Todos los registros de la vista
  getCentrosSalud(): Observable<Centrosalud[]> {
    return this.http.get<Centrosalud[]>(
     "/apifactprocessmed/centrodesalud",
    );
  }
}
