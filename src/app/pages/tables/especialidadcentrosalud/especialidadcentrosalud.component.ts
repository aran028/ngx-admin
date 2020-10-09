import { Component, OnInit } from "@angular/core";
import { Especialidadcentrosalud } from "../../../models/especialidadcentrosalud";
import { LocalDataSource } from "ng2-smart-table";
import { EspecialidadcentrosaludService } from "../../../services/especialidadcentrosalud.service";
import { ExporterService } from "../../../services/exporter.service";

@Component({
  selector: "ngx-especialidadcentrosalud",
  templateUrl: "./especialidadcentrosalud.component.html",
  styleUrls: ["./especialidadcentrosalud.component.scss"],
})
export class EspecialidadcentrosaludComponent {
  data: Especialidadcentrosalud[];
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
      id_centro_salud: {
        title: "id_Centro_salud",
        type: "number",
      },
      Centro_Salud: {
        title: "centro_salud",
        type: "string",
      },
      id_especialidad: {
        title: "id_especialidad",
        type: "number",
      },
      Especialidad: {
        title: "especialidad",
        type: "string",
      },
      activo: {
        title: "activo",
        type: "integer",
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: EspecialidadcentrosaludService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {
    this.service
      .getEspecialidadCentroSalud()
      .subscribe((res: Especialidadcentrosalud[]) => {
        this.data = res;
        this.source.load(this.data);
      });
    this.titulo = "list_Especialidad_centro_salud";
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.data, this.titulo);
  }
  exportAsPDF(): void {
    var text = [
      "id",
      "id_centro_salud",
      "centro_salud",
      "id_especialidad",
      "especialidad",
      "activo",
    ];
    this.pdfService.exportToPDF(this.data, this.titulo, text);
  }
}
