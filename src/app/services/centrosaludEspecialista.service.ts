import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Centrosalud } from "../models/centrosalud";
import { Observable } from "rxjs";
import { Especialista } from "../models/especialista";

@Injectable({
  providedIn: "root",
})
export class CentrosaludespecialistaService {
  constructor(private http: HttpClient) {}

  // Todos los registros de centro_de_salud para alimentar el desplegable
  getCentrosSalud(): Observable<Centrosalud[]> {
    return this.http.get<Centrosalud[]>(
            "/apifactprocessmed/centrodesalud",
    );
  }
  // Todos los especialistas de un centro de salud concreto
  getCentroSaludEspecialista(id: number): Observable<Especialista[]> {
    return this.http.get<Especialista[]>(
      
      "apifactprocessmed/centrodesaludespecialistas/" + id,
    );
  }
}
