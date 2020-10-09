import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Consentimiento } from "../../../models/consentimiento";
import { Especialidad } from "../../../models/especialidad";
import { Especialidadcentrosalud } from "../../../models/especialidadcentrosalud";
import { EspecialidadcentrosaludService } from "../../../services/especialidadcentrosalud.service";
import { EspecialidadcentrosaludConsentimientoService } from "../../../services/especialidadcentrosaludConsentimiento.service";
import { ExporterService } from "../../../services/exporter.service";

@Component({
  selector: "ngx-especialidadcentrosaludConsentimiento",
  templateUrl: "./especialidadcentrosaludConsentimiento.component.html",
  styleUrls: ["./especialidadcentrosaludConsentimiento.component.scss"],
})
export class EspecialidadcentrosaludConsentimientoComponent implements OnInit {
  data: Especialidadcentrosalud[];
  datac: Consentimiento[];
  valorespecialidadCentro: number;
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
      id_esp: {
        title: "id",
        type: "number",
      },
      activo: {
        title: "activo",
        type: "number",
      },
      especialidad_nombre: {
        title: "especialidad",
        type: "string",
      },
      centro_salud: {
        title: "centro_salud",
        type: "string",
      },
      id_consentimiento: {
        title: "id_consentimiento",
        type: "number",
      },
      estado: {
        title: "estado",
        type: "number",
      },
      especialista: {
        title: "id_especialista",
        type: "number",
      },
      especialista_nombre: {
        title: "especialista",
        type: "string",
      },
      paciente: {
        title: "id_paciente",
        type: "number",
      },
      procedimiento: {
        title: "procedimiento",
        type: "number",
      },
      firma_casa: {
        title: "firma_casa",
        type: "string",
      },
      hash_fpaciente: {
        title: "hash_fpaciente",
        type: "string",
      },
      fecha_creacion: {
        title: "fecha_creacion",
        type: "date",
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private service: EspecialidadcentrosaludConsentimientoService,
    private excelService: ExporterService,
    private pdfService: ExporterService
  ) {}
  ngOnInit(): void {
    //Cargar todos los especialistas en el desplegable
    this.service
      .getEspecialidadCentroSalud()
      .subscribe((res: Especialidadcentrosalud[]) => {
        this.data = res;
      });
  }
  //Metodo de llamada del select del año
  setEspecialidadCentro(value: number) {
    this.valorespecialidadCentro = value;
    this.service
      .getConsentimientoEspecialidadCentroSalud(this.valorespecialidadCentro)
      .subscribe((res: [Consentimiento]) => {
        this.datac = res;
        this.source.load(this.datac);
      });
    this.titulo =
      "list_Consentimientos_de_Especialidad_CentroSalud " +
      this.valorespecialidadCentro;
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.datac, this.titulo);
  }
  exportAsPDF(): void {
    var text = [
      "id",
      "activo",
      "especialidad",
      "centrosalud",
      "id_cons",
      "estado",
      "id_especialista",
      "especialista",
      "id_paciente",
      "procedimiento",
      "firma_casa",
      "hash_fpaciente",
      "fecha_creacion",
    ];
    this.pdfService.exportToPDF(this.datac, this.titulo, text);
  }
}
