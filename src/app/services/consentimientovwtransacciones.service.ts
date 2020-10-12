import { Injectable } from "@angular/core";
import { consentimientovwtransacciones } from "../models/consentimientovwtransacciones";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Component, OnInit } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/Rx";

@Injectable({
  providedIn: "root",
})
export class ConsentimientovwtransaccionesService {
  constructor(private http: HttpClient) {}

  // Grafico 1 - Numero de consentimientos por año y con estado 1 y desplegable G2
  getConsentimientosG1(): Observable<consentimientovwtransacciones[]> {
    return this.http.get<consentimientovwtransacciones[]>(
      "/apifactprocessmed/consentimientosG1",
    );
  }
  // Grafico 2: Numero de consentimientos por año y con estado 1 y con firmacasa
  getConsentimientosTransaccionesFirma(): Observable<
    consentimientovwtransacciones[]
  > {
    return this.http.get<consentimientovwtransacciones[]>(
      "/apifactprocessmed/consentimientosG2",
    );
  }

  // Total de registros de consentimientos con estado 1 y agrupado por año y dia (numero dia 0 domingo, 1 lunes)
  getConsentimientosTransaccionesGAW(): Observable<
    consentimientovwtransacciones[]
  > {
    return this.http.get<consentimientovwtransacciones[]>(
      "/apifactprocessmed/consentimientosG1Week",
    );
  }
  // Total de registros de consentimientos con estado 1 y agrupado por año, firma casa y dia (numero dia 0 domingo, 1 lunes)
  getConsentimientosTransaccionesGAFW(): Observable<
    consentimientovwtransacciones[]
  > {
    return this.http.get<consentimientovwtransacciones[]>(
      "/apifactprocessmed/consentimientosG2Week",
    );
  }
  // Total de registros de consentimientos con estado 1 y agrupado por año, firma casa y mes)
  getConsentimientosTransaccionesGAM(): Observable<
    consentimientovwtransacciones[]
  > {
    return this.http.get<consentimientovwtransacciones[]>(
      "/apifactprocessmed/consentimientosG1Month",
    );
  }
  // Total de registros de consentimientos con estado 1 y agrupado por año, firma casa y mes
  getConsentimientosTransaccionesGAFM(): Observable<
    consentimientovwtransacciones[]
  > {
    return this.http.get<consentimientovwtransacciones[]>(
      "/apifactprocessmed/consentimientosG2Month",
    );
  }
  // Total de registros de consentimientos con estado 0 y 1
  getConsentimientosG3(): Observable<consentimientovwtransacciones[]> {
    return this.http.get<consentimientovwtransacciones[]>(
      "/apifactprocessmed/consentimientosG3",
    );
  }
  // Total de registros de consentimientos con estado 0 y 1 agrupados por año
  getConsentimientosG4(): Observable<consentimientovwtransacciones[]> {
    return this.http.get<consentimientovwtransacciones[]>(
      "apifactprocessmed/consentimientosG4",
    );
  }
}
