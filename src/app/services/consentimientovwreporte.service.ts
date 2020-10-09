import { Injectable } from "@angular/core";
//Importamos el modelo
import { Consentimiento } from "../models/consentimiento";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { consentimientovwreporte } from "../models/consentimientovwreporte";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { toArray } from "rxjs/operators";
import { map } from "rxjs/operators";

@Injectable()
export class ConsentimientovwreporteService {
  constructor(private http: HttpClient) {}

  getConsentimientos(): Observable<consentimientovwreporte[]> {
    return this.http.get<consentimientovwreporte[]>(
      //"http://api.factureprocessmed.com/api/consentimientos"
      "/apifactprocessmed/consentimientosvwreporte"
    );
  }
}
