import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { ProcedimientosService } from "../../../services/procedimientos.service";
import { Procedimientos } from "../../../models/procedimientos";
import { ExporterService } from "../../../services/exporter.service";

@Component({
  selector: "ngx-procedimientos",
  templateUrl: "./procedimientos.component.html",
  styleUrls: ["./procedimientos.component.scss"],
})
export class ProcedimientosComponent {
  data: Procedimientos[];
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
      id_especialidad: {
        title: "id_especialidad",
        type: "number",
      },
      especialidad: {
        title: "especialidad",
        type: "string",
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: ProcedimientosService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {
    this.service.getProcedimientos().subscribe((res: Procedimientos[]) => {
      this.data = res;
      this.source.load(this.data);
    });
    this.titulo = "list_Procedimientos_index";
  }

  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.data, this.titulo);
  }
  exportAsPDF(): void {
    var text = ["id", "nombre", "id_especialidad", "especialidad"];
    this.pdfService.exportToPDF(this.data, this.titulo, text);
  }
}
