import { Component, OnInit } from "@angular/core";
import { CentrosaludespecialistaService } from "../../../services/centrosaludEspecialista.service";
import { ExporterService } from "../../../services/exporter.service";
import { Centrosalud } from "../../../models/centrosalud";
import { Especialista } from "../../../models/especialista";
import { LocalDataSource } from "ng2-smart-table";
import jsPDF from "jspdf";

@Component({
  selector: "ngx-centrosaludEspecialista",
  templateUrl: "./centrosaludEspecialista.component.html",
  styleUrls: ["./centrosaludEspecialista.component.scss"],
})
export class CentrosaludEspecialistaComponent implements OnInit {
  data: Centrosalud[];
  datac: Especialista[];
  valorcentrosalud: number;
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
      id_centro_salud: {
        title: "id_centro_salud",
        type: "number",
      },
      centro_salud: {
        title: "centro_salud",
        type: "string",
      },
      id_especialista: {
        title: "id_especialista",
        type: "number",
      },
      dni: {
        title: "dni",
        type: "number",
      },
      nombre: {
        title: "nombre",
        type: "string",
      },
      siglas: {
        title: "siglas",
        type: "number",
      },
      id_especialidad: {
        title: "id_especialidad",
        type: "number",
      },
      Especialidad: {
        title: "especialidad",
        type: "string",
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
    private service: CentrosaludespecialistaService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {}

  ngOnInit(): void {
    //Cargar todos los especialistas en el desplegable
    this.service.getCentrosSalud().subscribe((res: Centrosalud[]) => {
      this.data = res;
    });
  }
  //Metodo de llamada del select del año
  setCentroSalud(value: number) {
    console.log("the centrosalud is " + value);
    this.valorcentrosalud = value;
    this.service
      .getCentroSaludEspecialista(this.valorcentrosalud)
      .subscribe((res: Especialista[]) => {
        this.datac = res;
        console.log(this.datac);
        this.source.load(this.datac);
      });
    this.titulo = "list_Especialistas_de_Centro_de_Salud " + value;
  }

  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.datac, this.titulo);
  }
  exportAsPDF(): void {
    var text = [
      "id_centro_salud",
      "centro_salud",
      "id_especialista",
      "dni",
      "nombre",
      "apellido",
      "siglas",
      "id_especialidad",
      "especialidad",
      "firma",
      "hash_firma",
    ];
    this.pdfService.exportToPDF(this.datac, this.titulo, text);
  }
}
