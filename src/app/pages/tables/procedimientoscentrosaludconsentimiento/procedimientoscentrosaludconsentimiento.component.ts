import { Component, OnInit } from "@angular/core";
import { Consentimiento } from "../../../models/consentimiento";
import { Procedimientoscentrosalud } from "../../../models/procedimientoscentrosalud";
import { LocalDataSource } from "ng2-smart-table";
import { ProcedimientoscentrosaludconsentimientoService } from "../../../services/procedimientoscentrosaludconsentimiento.service";
import { ExporterService } from "../../../services/exporter.service";

@Component({
  selector: "ngx-procedimientoscentrosaludconsentimiento",
  templateUrl: "./procedimientoscentrosaludconsentimiento.component.html",
  styleUrls: ["./procedimientoscentrosaludconsentimiento.component.scss"],
})
export class ProcedimientoscentrosaludconsentimientoComponent
  implements OnInit {
  data: Procedimientoscentrosalud[];
  datac: Consentimiento[];
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
      centro_salud: {
        title: "centro_salud",
        type: "string",
      },
      nombre: {
        title: "procedimiento_nombre",
        type: "string",
      },
      id_consentimiento: {
        title: "id_consentimiento",
        type: "number",
      },
      paciente: {
        title: "id_paciente",
        type: "number",
      },
      no_historia_c: {
        title: "no_historia_c",
        type: "number",
      },
      especialista: {
        title: "especialista",
        type: "string",
      },
      especialidad: {
        title: "especialidad",
        type: "number",
      },
      estado: {
        title: "estado",
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
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: ProcedimientoscentrosaludconsentimientoService,
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
  setProcCentroSaludConsentimientos(value: number) {
    this.valorproc = value;
    this.service
      .getProcedimientocentrosaludConsentimientos(this.valorproc)
      .subscribe((res: [Consentimiento]) => {
        this.datac = res;
        console.log(this.datac);
        this.source.load(this.datac);
      });
    this.titulo =
      "list_Consentimientos_con_Proced_Ctro_Salud " + this.valorproc;
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.datac, this.titulo);
  }
  exportAsPDF(): void {
    var text = [
      "id",
      "centro_salud",
      "procedimiento_nombre",
      "id_consentimiento",
      "id_paciente",
      "no_historia_c",
      "especialista",
      "especialidad",
      "estado",
      "firma_casa",
      "hash_fpaciente",
    ];
    this.pdfService.exportToPDF(this.datac, this.titulo, text);
  }
}
