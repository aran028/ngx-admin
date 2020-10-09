import { Component, OnInit } from "@angular/core";
import { Consentimiento } from "../../../models/consentimiento";
import { Especialista } from "../../../models/especialista";
import { LocalDataSource } from "ng2-smart-table";
import { EspecialistaconsentimientoService } from "../../../services/especialistaconsentimiento.service";
import { RESOURCE_CACHE_PROVIDER } from "@angular/platform-browser-dynamic";
import { ExporterService } from "../../../services/exporter.service";
import jsPDF from "jspdf";
import { id } from "@swimlane/ngx-charts";

@Component({
  selector: "ngx-especialistaconsentimiento",
  templateUrl: "./especialistaconsentimiento.component.html",
  styleUrls: ["./especialistaconsentimiento.component.scss"],
})
export class EspecialistaConsentimientoComponent implements OnInit {
  data: Especialista[];
  datac: Consentimiento[];
  valorespecialista: number;
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
      especialista: {
        title: "id_especialista",
        type: "number",
      },
      especialista_nombre: {
        title: "especialista",
        type: "string",
      },
      id: {
        title: "id_consentimiento",
        type: "number",
      },
      especialidad: {
        title: "id_especialidad",
        type: "number",
      },
      especialidad_nombre: {
        title: "especialidad",
        type: "number",
      },

      paciente: {
        title: "id_paciente",
        type: "number",
      },
      paciente_nombre: {
        title: "paciente",
        type: "string",
      },
      procedimiento: {
        title: "procedimiento",
        type: "number",
      },
      firma_casa: {
        title: "firma_casa",
        type: "string",
      },
      firma_paciente: {
        title: "firma_paciente",
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
    private service: EspecialistaconsentimientoService,
    private excelService: ExporterService
  ) {}
  ngOnInit(): void {
    //Cargar todos los especialistas en el desplegable
    this.service.getEspecialitas().subscribe((res: Especialista[]) => {
      this.data = res;
    });
  }
  //Metodo de llamada del select del año
  setEspecialista(value: number) {
    console.log("the especialista is " + value);
    this.valorespecialista = value;
    this.service
      .getEspecialistaConsentimiento(this.valorespecialista)
      .subscribe((res: [Consentimiento]) => {
        this.datac = res;
        this.source.load(this.datac);
      });
  }
  exportAsXLSX(): void {
    this.excelService.exportToExcel(
      this.datac,
      "reporteConsentimientosEspecialista"
    );
  }
  downloadPDF(): void {
    var doc = new jsPDF("p", "mm", "a4");
    doc.setFont("courier");
    doc.setFontSize(8);
    var titulo = "REPORTE CONSENTIMIENTOS DE ESPECIALISTA";
    doc.text(titulo, 20, 10);
    //dibujar la fila de la tabla
    var fila =
      "Especialista Especialidad Paciente Procedimiento      Fecha_Creacion";
    doc.text(fila, 20, 15);
    var text = [];
    for (var i in this.datac) {
      text.push(
        this.datac[i]["especialista"] +
          "             " +
          this.datac[i]["especialidad"] +
          "           " +
          this.datac[i]["paciente"] +
          "          " +
          this.datac[i]["procedimiento"] +
          "        " +
          this.datac[i]["fecha_creacion"]
      );
    }
    doc.text(text, 20, 20);

    var fileName =
      "reporteEspecialistaConsentimientos" + new Date().getTime() + ".pdf";
    //doc.save("angular-demo.pdf");
    //addFooters(doc);
    doc.save(fileName);
  }
}
