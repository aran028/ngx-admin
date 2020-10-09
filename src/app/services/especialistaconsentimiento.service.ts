import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Especialista } from "../models/especialista";
import { Consentimiento } from "../models/consentimiento";
import "rxjs/Rx";

@Injectable({
  providedIn: "root",
})
export class EspecialistaconsentimientoService {
  constructor(private http: HttpClient) {}

  //Todos los registros de especialistas para cargar el desplegable
  getEspecialitas(): Observable<Especialista[]> {
    return this.http.get<Especialista[]>(
      //Laravel
      "http://api.factureprocessmed.com/api/especialistas"
    );
  }
  //Seleccionado el especialista en el desplegable devuelve todos sus consentimientos
  getEspecialistaConsentimiento(id: number): Observable<Consentimiento[]> {
    return this.http.get<Consentimiento[]>(
      //"http://api.factureprocessmed.com/api/especialistas/" +
      // id +
      // "/consentimientos"
      "/apifactprocessmed/especialistaconsentimientos/" + id
    );
  }
}
