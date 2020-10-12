import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { consentimientovwreporte } from "../models/consentimientovwreporte";
import "rxjs/add/operator/map";
import "rxjs/Rx";

@Injectable()
export class ConsentimientovwreporteService {
  constructor(private http: HttpClient) {}

  getConsentimientos(): Observable<consentimientovwreporte[]> {
    return this.http.get<consentimientovwreporte[]>(
            "/apifactprocessmed/consentimientosvwreporte",
    );
  }
}
