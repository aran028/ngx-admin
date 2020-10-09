import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Especialidad } from "../../../models/especialidad";
import { EspecialidadService } from "../../../services/especialidad.service";
import { ExporterService } from "../../../services/exporter.service";

@Component({
  selector: "ngx-especialidad",
  templateUrl: "./especialidad.component.html",
  styleUrls: ["./especialidad.component.scss"],
})
export class EspecialidadComponent {
  data: Especialidad[];
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
      nombre: {
        title: "nombre",
        type: "string",
      },
      id_centro_salud: {
        title: "id_centro_salud",
        type: "number",
      },
      activo: {
        title: "activo",
        type: "number",
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private service: EspecialidadService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {
    this.service.getEspecialidad().subscribe((res: Especialidad[]) => {
      this.data = res;
      console.log(this.data);
      this.source.load(this.data);
    });
    this.titulo = "list_Especialidad_index";
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.data, this.titulo);
  }
  exportAsPDF(): void {
    var text = ["id", "nombre", "id_centro_salud", "activo"];
    this.pdfService.exportToPDF(this.data, this.titulo, text);
  }
}
