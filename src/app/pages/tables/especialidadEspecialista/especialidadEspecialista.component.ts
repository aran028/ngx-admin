import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Especialidad } from "../../../models/especialidad";
import { Especialista } from "../../../models/especialista";
import { ExporterService } from "../../../services/exporter.service";
import { EspecialidadEspecialistaService } from "../../../services/especialidadEspecialista.service";

@Component({
  selector: "ngx-especialidadEspecialista",
  templateUrl: "./especialidadEspecialista.component.html",
  styleUrls: ["./especialidadEspecialista.component.scss"],
})
export class especialidadEspecialistaComponent implements OnInit {
  data: Especialidad[];
  datae: Especialista[];
  titulo: string;
  valorespecialidad: number;
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
      id_especialidad: {
        title: "id_especialidad",
        type: "number",
      },
      especialidad: {
        title: "especialidad",
        type: "string",
      },
      id_especialista: {
        title: "id_especialista",
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
        title: "dni",
        type: "string",
      },
      siglas: {
        title: "siglas",
        type: "string",
      },
      id_centro_salud: {
        title: "id_centro_salud",
        type: "number",
      },
      centro_salud: {
        title: "centro_salud",
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
    private service: EspecialidadEspecialistaService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {}
  ngOnInit(): void {
    //Cargar todos los especialidades en el desplegable
    this.service.getEspe().subscribe((res: Especialidad[]) => {
      console.log(this.data);
      this.data = res;
    });
  }
  //Metodo de llamada del select del año
  setEspecialidad(value: number) {
    console.log("the especialidad is " + value);
    this.valorespecialidad = value;
    this.service
      .getEspecialistaEspecialidad(this.valorespecialidad)
      .subscribe((res: [Especialista]) => {
        this.datae = res;
        console.log(this.datae);
        this.source.load(this.datae);
      });
    this.titulo =
      "list_Especialistas_con_especialidad " + this.valorespecialidad;
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.datae, this.titulo);
  }
  exportAsPDF(): void {
    var text = [
      "id_especialidad",
      "especialidad",
      "id_especialista",
      "dni",
      "nombre",
      "apellido",
      "siglas",
      "firma",
      "hash_firma",
      "id_centro_salud",
      "centro_salud",
    ];
    this.pdfService.exportToPDF(this.datae, this.titulo, text);
  }
}
