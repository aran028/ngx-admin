//Equivalente a image-list.component.ts//Revisado
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
//importamos modelo Consentimiento
import { Consentimiento } from "../../../models/consentimiento";
///importamos el servicio
import { ConsentimientovwreporteService } from "../../../services/consentimientovwreporte.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { table } from "console";
import { ExporterService } from "../../../services/exporter.service";
import { consentimientovwreporte } from "../../../models/consentimientovwreporte";

@Component({
  selector: "ngx-consentimiento-vwreporte",
  templateUrl: "./consentimiento-vwreporte.component.html",
  styleUrls: ["./consentimiento-vwreporte.component.scss"],
})
export class ConsentimientovwreporteComponent {
  data: consentimientovwreporte[];
  titulo: string;
  settings = {
    actions: false,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Anio: {
        title: "Anio",
        type: "number",
      },
      Mes: {
        title: "Mes",
        type: "number",
      },
      Dia: {
        title: "Dia",
        type: "string",
      },
      FirmaCasa: {
        title: "FirmaCasa",
        type: "string",
      },
      CentroSalud: {
        title: "CentroSalud",
        type: "string",
      },
      Especialidad: {
        title: "Especialidad",
        type: "string",
      },
      Procedimiento: {
        title: "procedimiento",
        type: "string",
      },
      Contador: {
        title: "Contador",
        type: "number",
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: ConsentimientovwreporteService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {
    this.service
      .getConsentimientos()
      .subscribe((res: consentimientovwreporte[]) => {
        this.data = res;
        console.log(this.data);
        this.source.load(this.data);
      });
    this.titulo = "list_vw_reporte_consentimiento";
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.data, this.titulo);
  }
  exportAsPDF(): void {
    var text = [
      "anio",
      "mes",
      "dia",
      "firma_casa",
      "centro salud",
      "especialidad",
      "procedimiento",
      "contador",
    ];
    this.pdfService.exportToPDF(this.data, this.titulo, text);
  }
}
