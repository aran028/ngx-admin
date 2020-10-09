import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Paciente } from "../../../models/paciente";
import { PacienteService } from "../../../services/paciente.service";
import { ExporterService } from "../../../services/exporter.service";

@Component({
  selector: "ngx-paciente",
  templateUrl: "./paciente.component.html",
  styleUrls: ["./paciente.component.scss"],
})
export class PacienteComponent {
  data: Paciente[];
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
        type: "string",
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
      fecha_nacimiento: {
        title: "fecha_nacimiento",
        type: "string",
      },
      direccion: {
        title: "direccion",
        type: "string",
      },
      correo: {
        title: "correo",
        type: "string",
      },
      codigo: {
        title: "codigo",
        type: "string",
      },
      telefono: {
        title: "telefono",
        type: "string",
      },
      fecha_creacion: {
        title: "telefono",
        type: "date",
      },
      representante: {
        title: "representante",
        type: "string",
      },
      rep_dni: {
        title: "rep_dni",
        type: "string",
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: PacienteService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {
    this.service.getPaciente().subscribe((res: Paciente[]) => {
      this.data = res;
      this.source.load(this.data);
    });
    this.titulo = "list_Pacientes_index";
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.data, this.titulo);
  }
  exportAsPDF(): void {
    var text = [
      "id",
      "no_historia_c",
      "dni",
      "nombre",
      "apellido",
      "fecha_nacimiento",
      "direccion",
      "correo",
      "codigo",
      "telefono",
      "fecha_creacion",
      "representante",
      "rep_dni",
    ];
    this.pdfService.exportToPDF(this.data, this.titulo, text);
  }
}
