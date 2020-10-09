import { Component, OnInit } from "@angular/core";
import jsPDF from "jspdf";
import { LocalDataSource } from "ng2-smart-table";
import { Procedimientoscentrosalud } from "../../../models/procedimientoscentrosalud";
import { ExporterService } from "../../../services/exporter.service";
import { ProcedimientoscentrosaludService } from "../../../services/procedimientoscentrosalud.service";

@Component({
  selector: "ngx-procedimientoscentrosalud",
  templateUrl: "./procedimientoscentrosalud.component.html",
  styleUrls: ["./procedimientoscentrosalud.component.scss"],
})
export class ProcedimientoscentrosaludComponent implements OnInit {
  data: Procedimientoscentrosalud[];
  datac: Procedimientoscentrosalud[];
  valorproc: number;
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
        title: "id_centro_salud",
        type: "number",
      },
      centro_salud: {
        title: "centro_salud",
        type: "string",
      },
      id_procedimiento: {
        title: "id_procedimiento",
        type: "number",
      },
      procedimiento: {
        title: "procedimiento",
        type: "string",
      },
      activo: {
        title: "activo",
        type: "number",
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private service: ProcedimientoscentrosaludService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {}
  ngOnInit(): void {
    //Cargar todos los procedimientoscentrosalud en el desplegable
    this.service
      .getProcedimientoscentrosalud()
      .subscribe((res: Procedimientoscentrosalud[]) => {
        this.data = res;
      });
  }
  //Metodo de llamada del select del procedimientocentrosalud
  setProcCentroSalud(value: number) {
    console.log("the procedimiento is " + value);
    this.valorproc = value;
    this.service
      .getProcedimientocentrosaludId(this.valorproc)
      .subscribe((res: [Procedimientoscentrosalud]) => {
        this.datac = res;
        console.log(this.datac);
        this.source.load(this.datac);
      });
    this.titulo = "list_Procedimientos_centro_salud_index";
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.datac, this.titulo);
  }
  exportAsPDF(): void {
    var text = [
      "id",
      "id_centro_salud",
      "centro_salud",
      "id_procedimiento",
      "procedimiento",
      "activo",
    ];
    this.pdfService.exportToPDF(this.datac, this.titulo, text);
  }
}
