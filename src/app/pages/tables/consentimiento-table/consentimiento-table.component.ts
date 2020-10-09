import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
//importamos el modelo ConsentimientovwTransacciones
import { consentimientovwtransacciones } from "../../../models/consentimientovwtransacciones";
//Importamos el servicio
import { ConsentimientovwtransaccionesService } from "../../../services/consentimientovwtransacciones.service";
import { ExporterService } from "../../../services/exporter.service";

@Component({
  selector: "ngx-consentimiento-table",
  templateUrl: "./consentimiento-table.component.html",
  styleUrls: ["./consentimiento-table.component.scss"],
})
export class ConsentimientoTableComponent {
  data: consentimientovwtransacciones[];
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
      firma_casa: {
        title: "firma_casa",
        type: "number",
      },
      estado: {
        title: "estado",
        type: "number",
      },
      contador: {
        title: "contador",
        type: "number",
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: ConsentimientovwtransaccionesService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {
    this.service
      .getConsentimientosTransaccionesFirma()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.data = res;
        console.log(this.data);
        this.source.load(this.data);
      });
    this.titulo = "list_NumConsentimientos_anio_estado_1_firma_casa";
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.data, this.titulo);
  }
  exportAsPDF(): void {
    var text = ["anio", "firma_casa", "estado", "contador"];
    this.pdfService.exportToPDF(this.data, this.titulo, text);
  }
}
