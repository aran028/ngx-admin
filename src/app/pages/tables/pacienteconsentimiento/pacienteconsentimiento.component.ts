import { Component, OnInit } from "@angular/core";
import { Consentimiento } from "../../../models/consentimiento";
import { Pacienteconsentimiento } from "../../../models/pacienteconsentimiento";
import { LocalDataSource } from "ng2-smart-table";
import { RESOURCE_CACHE_PROVIDER } from "@angular/platform-browser-dynamic";
import { ExporterService } from "../../../services/exporter.service";
import { PacienteconsentimientoService } from "../../../services/pacienteconsentimiento.service";
import { Paciente } from "../../../models/paciente";

@Component({
  selector: "ngx-pacienteconsentimiento",
  templateUrl: "./pacienteconsentimiento.component.html",
  styleUrls: ["./pacienteconsentimiento.component.scss"],
})
export class PacienteconsentimientoComponent implements OnInit {
  datac: Consentimiento[];
  data: Paciente[];
  valorpaciente: number;
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
      no_historia_c: {
        title: "no_historia_c",
        type: "number",
      },
      DNI: {
        title: "DNI",
        type: "string",
      },
      id_consentimiento: {
        title: "id_consentimiento",
        type: "number",
      },
      id_especialista: {
        title: "id_especialista",
        type: "number",
      },
      especialista_nombre: {
        title: "especialista",
        type: "string",
      },
      id_especialidad: {
        title: "id_especialidad",
        type: "number",
      },
      especialidad_nombre: {
        title: "especialidad",
        type: "string",
      },
      procedimiento: {
        title: "procedimiento",
        type: "number",
      },
      estado: {
        title: "estado",
        type: "number",
      },
      firma_casa: {
        title: "firma_casa",
        type: "number",
      },
      fecha_creacion: {
        title: "fecha_creacion",
        type: "date",
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private service: PacienteconsentimientoService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {}
  ngOnInit(): void {
    //Cargar todos los pacientes en el desplegable
    this.service.getPacienteD().subscribe((res: Paciente[]) => {
      this.data = res;
    });
  }
  //Metodo de llamada del select del año
  setPaciente(value: number) {
    console.log("the paciente is " + value);
    this.valorpaciente = value;
    this.service
      .getPacienteConsentimiento(this.valorpaciente)
      .subscribe((res: Consentimiento[]) => {
        this.datac = res;
        console.log(this.datac);
        this.source.load(this.datac);
      });
    this.titulo = "list_Consentimientos_de_paciente " + this.valorpaciente;
  }
  exportAsXLSX(): void {
    console.log("Hola");
    this.excelService.exportToExcel(this.datac, this.titulo);
  }
  exportAsPDF(): void {
    var text = [
      "id",
      "no_historia_c",
      "DNI",
      "id_consentimiento",
      "id_especialista",
      "especialista",
      "id_especialidad",
      "especialidad",
      "procedimiento",
      "estado",
      "firma_casa",
      "fecha_creacion",
    ];
    this.pdfService.exportToPDF(this.datac, this.titulo, text);
  }
}
