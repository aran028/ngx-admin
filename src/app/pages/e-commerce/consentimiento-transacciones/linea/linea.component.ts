import { Component } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Label } from "ng2-charts";
import { consentimientovwtransacciones } from "../../../../models/consentimientovwtransacciones";
import { ConsentimientovwtransaccionesService } from "../../../../services/consentimientovwtransacciones.service";

@Component({
  selector: "ngx-linea",
  templateUrl: "./linea.component.html",
  styleUrls: ["./linea.component.scss"],
})
export class LineaComponent {
  data: consentimientovwtransacciones[];
  datai: consentimientovwtransacciones[];
  datasemana: consentimientovwtransacciones[];
  datames: consentimientovwtransacciones[];
  periodo: string;
  value: number;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [{ data: [], label: "" }];
  constructor(private service: ConsentimientovwtransaccionesService) {
    this.recargaGraficoAnos();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    // Al iniciar se ejectua la consulta http://localhost:3000/consentimientosG1
    // Es decir cuenta por año los registros que tienen el estado=1
    this.service
      .getConsentimientosG1()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.data = res;
      });
  }
  recargaGraficoAnos() {
    this.service
      .getConsentimientosG1()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.data = res;
        const i = 0;
        let j = 0;
        for (const numero of res) {
          this.barChartLabels.push(numero.Anio.toString());
          this.barChartData[i].data[j] = numero.contador; // Leyenda de encima
          j = j + 1;
        } // for
        this.barChartData[i].label = "Estado 1";
        this.periodo = "year";
      });
  }

  // Metodo de llamada del select del año
  setAnio(value: number) {
    // Actualizas el valor del año
    this.value = value;
    console.log("Año vale"+ this.value);
   // inicializo
    // Preguntamos que valor tiene periodo
    if (this.periodo === "week") {
      this.getGraficoWeek(this.periodo);
    }
    if (this.periodo === "year") {
      this.getGraficoYear(this.periodo);
    }
    if (this.periodo === "month") {
      this.getGraficoMes(this.periodo);
    }
  }
  // Metodo de llamada del select del periodo
  setPeriodo(seleccionadoperiodo: string) {
    if (this.periodo !== seleccionadoperiodo)
      this.periodo = seleccionadoperiodo;
    switch (this.periodo) {
      case "year":
        this.getGraficoYear(seleccionadoperiodo);
        // this.randomize();
        break;
      case "week":
        this.getGraficoWeek(seleccionadoperiodo);
        // this.randomize();
        break;
      case "month":
        this.getGraficoMes(seleccionadoperiodo);
        // this.randomize();
        break;
    }
  }
  // Seleccionando por year
  getGraficoYear(seleccionadoperiodo: string) {
       this.service
      .getConsentimientosG1()
      .subscribe((res: consentimientovwtransacciones[]) => {
        const i = 0;
        const j = 0;
        let sumaContador = 0;
         for (let numero of res) {
        // preguntas por el año
        if (numero.Anio == this.value) {
            sumaContador = sumaContador + numero.contador;
          }
        } // for
        this.barChartLabels.length = 0;
        this.barChartLabels.push(this.value.toString());
        this.barChartData[i].data[j] = sumaContador;
        this.barChartData[i].label = "Estado 1";
      });
  }
  getGraficoWeek(seleccionadoperiodo: string) {
     this.service
      .getConsentimientosTransaccionesGAW()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.datasemana = res;
        const i = 0;
         this.barChartLabels.length = 0;
        // inicializar barChartData
        for (let j = 0; j <= 6; j++) {
          this.barChartData[0].data[j] = 0;
            }
        this.barChartLabels[0] = "Domingo";
        this.barChartLabels[1] = "Lunes";
        this.barChartLabels[2] = "Martes";
        this.barChartLabels[3] = "Miercoles";
        this.barChartLabels[4] = "Jueves";
        this.barChartLabels[5] = "Viernes";
        this.barChartLabels[6] = "Sabado";

        for (const numero of res) {
          if (numero.Anio == this.value) {
              this.barChartData[i].data[numero.Dia - 1] = numero.contador;         }
        } // for
        // Leyenda de encima
        this.barChartData[i].label = "Estado 1";
        this.randomize();
      });
  }
  getGraficoMes(seleccionadoperiodo: string) {
    this.service
      .getConsentimientosTransaccionesGAM()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.datames = res;
        const i = 0;
        this.barChartLabels.length = 0;
        // inicializar barChartData
        for (let j = 0; j <= 11; j++) {
          this.barChartData[0].data[j] = 0;
        }
        this.barChartLabels[0] = "Enero";
        this.barChartLabels[1] = "Febrero";
        this.barChartLabels[2] = "Marzo";
        this.barChartLabels[3] = "Abril";
        this.barChartLabels[4] = "Mayo";
        this.barChartLabels[5] = "Junio";
        this.barChartLabels[6] = "Julio";
        this.barChartLabels[7] = "Agosto";
        this.barChartLabels[8] = "Septiembre";
        this.barChartLabels[9] = "Octubre";
        this.barChartLabels[10] = "Noviembre";
        this.barChartLabels[11] = "Diciembre";

        for (let numero of res) {
          if (numero.Anio == this.value) {
            this.barChartData[i].data[numero.Mes - 1] = numero.contador;
          }
        }
        this.barChartData[i].label = "Estado 1";
        this.randomize();
      });
  }
  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    // console.log(event, active);
  }
  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    // console.log(event, active);
  }
  public randomize(): void {
    this.barChartType = this.barChartType === "bar" ? "line" : "bar";
  }
}
