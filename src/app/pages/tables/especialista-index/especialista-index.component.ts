import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Especialista } from "../../../models/especialista";
import { EspecialistaService } from "../../../services/especialista.service";
import { ExporterService } from "../../../services/exporter.service";

@Component({
  selector: "ngx-especialista-index",
  templateUrl: "./especialista-index.component.html",
  styleUrls: ["./especialista-index.component.scss"],
})
export class EspecialistaIndexComponent {
  data: Especialista[];
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
      id: {
        title: "id",
        type: "number",
      },
      dni: {
        title: "dni",
        type: "string",
      },
      nombre: {
        title: "nombre",
        type: "string",
      },
      apellido: {
        title: "apellido",
        type: "string",
      },
      siglas: {
        title: "siglas",
        type: "string",
      },
      especialidad: {
        title: "especialidad",
        type: "number",
      },
      direccion: {
        title: "direccion",
        type: "string",
      },
      ciudad: {
        title: "ciudad",
        type: "number",
      },
      provincia: {
        title: "provincia",
        type: "number",
      },
      firma: {
        title: "firma",
        type: "number",
      },
      hash_firma: {
        title: "hash_firma",
        type: "string",
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: EspecialistaService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {
    this.service.getEspecialitas().subscribe((res: Especialista[]) => {
      this.data = res;
      this.source.load(this.data);
    });
    this.titulo = "list_Especialistas_index";
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.data, this.titulo);
  }
  exportAsPDF(): void {
    var text = [
      "id",
      "dni",
      "nombre",
      "apellido",
      "siglas",
      "especialidad",
      "direccion",
      "centro_salud",
      "ciudad",
      "provincia",
      "firma",
      "has_firma",
    ];
    this.pdfService.exportToPDF(this.data, this.titulo, text);
  }
}
