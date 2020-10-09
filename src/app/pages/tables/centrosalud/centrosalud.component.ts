import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Centrosalud } from "../../../models/centrosalud";
import { CentrosaludService } from "../../../services/centrosalud.service";
import { ExporterService } from "../../../services/exporter.service";

@Component({
  selector: "ngx-centrosalud",
  templateUrl: "./centrosalud.component.html",
  styleUrls: ["./centrosalud.component.scss"],
})
export class CentrosaludComponent {
  data: Centrosalud[];
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
      direccion: {
        title: "direccion",
        type: "string",
      },
      ciudad: {
        title: "ciudad",
        type: "string",
      },
      provincia: {
        title: "provincia",
        type: "string",
      },
      telefono: {
        title: "telefono",
        type: "string",
      },
      correo_delegado: {
        title: "correo_delegado",
        type: "number",
      },
      ciglas: {
        title: "ciglas",
        type: "string",
      },
      firmas: {
        title: "firmas",
        type: "number",
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private excelService: ExporterService,
    private service: CentrosaludService,
    private pdfService: ExporterService
  ) {}

  ngOnInit(): void {
    this.service.getCentrosSalud().subscribe((res: Centrosalud[]) => {
      this.data = res;
      console.log(this.data);
      this.source.load(this.data);
    });
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.data, "list_CentrosdeSalud_index");
  }
  exportAsPDF(): void {
    var text = [
      "id",
      "nombre",
      "direccion",
      "ciudad",
      "provincia",
      "telefono",
      "correo_delegado",
      "ciglas",
      "firmas",
    ];
    this.pdfService.exportToPDF(this.data, "list_CentrosdeSalud_index", text);
  }
}
