import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Label } from "ng2-charts";
//importamos el modelo ConsentimientovwTransacciones para la grafica
import { consentimientovwtransacciones } from "../../../../models/consentimientovwtransacciones";
//importo el servicio para mostrar datos en gráfica
import { ConsentimientovwtransaccionesService } from "../../../../services/consentimientovwtransacciones.service";
import { sign } from "crypto";
//import * as pluginAnnotations from "chartjs-plugin-annotation";

@Component({
  selector: "ngx-linea",
  templateUrl: "./linea.component.html",
  styleUrls: ["./linea.component.scss"],
})
export class LineaComponent {
  data: consentimientovwtransacciones[];
  datai: consentimientovwtransacciones[];
  datasemana: consentimientovwtransacciones[];
  datayear: consentimientovwtransacciones[];
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

  ngOnInit() {
    //Al iniciar se ejectua la consulta http://localhost:3000/consentimientosG1
    //Es decir cuenta por año los registros que tienen el estado=1
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
        var i = 0;
        var j = 0;
        for (let numero of res) {
          this.barChartLabels.push(numero.Anio.toString());
          this.barChartData[i].data[j] = numero.contador; //Leyenda de encima
          j = j + 1;
        } //for
        this.barChartData[i].label = "Estado: 1";
        this.periodo = "year"; //for //}
      });
  }

  //Metodo de llamada del select del año
  setAnio(value: number) {
    console.log("the selected año  is " + value);
    console.log("the period es " + this.periodo);
    //Actualizas el valor del año
    this.value = value;
    //inicializo
    //this.barChartLabels.length = 0;
    //Preguntamos que valor tiene periodo
    if (this.periodo == "week") {
      console.log("He entrado en week");
      this.getGraficoWeek(this.periodo);
      //this.randomize();
    }
    if (this.periodo == "year") {
      console.log("He entrado en YEAR");
      this.getGraficoYear(this.periodo);
      //this.randomize();
    }
    if (this.periodo == "month") {
      console.log("He entrado en month");
      this.getGraficoMes(this.periodo);
    }
  }
  //Metodo de llamada del select del periodo
  setPeriodo(seleccionadoperiodo: string) {
    if (this.periodo !== seleccionadoperiodo)
      this.periodo = seleccionadoperiodo;
    console.log("Periodo vale " + this.periodo);
    switch (this.periodo) {
      case "year":
        this.getGraficoYear(seleccionadoperiodo);
        //this.randomize();
        break;
      case "week":
        this.getGraficoWeek(seleccionadoperiodo);
        //this.randomize();
        break;
      case "month":
        this.getGraficoMes(seleccionadoperiodo);
        //this.randomize();
        break;
    }
  }
  //Seleccionando por year
  getGraficoYear(seleccionadoperiodo: string) {
    console.log("He entrado en GRAFICO AÑO");
    console.log("El AÑO vale" + this.value);
    this.service
      .getConsentimientosG1()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.datayear = res;
        console.log(this.datayear);
        var i = 0;
        var j = 0;
        var sumaContador = 0;
        for (let numero of res) {
          //preguntas por el año
          if (numero.Anio == this.value) {
            sumaContador = sumaContador + numero.contador;
          }
        } //for
        this.barChartLabels.length = 0;
        this.barChartLabels.push(this.value.toString());
        this.barChartData[i].data[j] = sumaContador; //Leyenda de encima
        this.barChartData[i].label = "Estado:" + 1; //}
        //this.randomize();
      });
  }
  getGraficoWeek(seleccionadoperiodo: string) {
    console.log("GRAFICO SEMANA");
    console.log("El AÑO ES " + this.value);
    this.service
      .getConsentimientosTransaccionesGAW()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.datasemana = res;
        console.log(this.datasemana);
        var i = 0;
        var j = 0;
        this.barChartLabels.length = 0;
        //inicializar barChartData
        for (var j = 0; j <= 6; j++) {
          this.barChartData[0].data[j] = 0;
        }
        this.barChartLabels[0] = "Domingo";
        this.barChartLabels[1] = "Lunes";
        this.barChartLabels[2] = "Martes";
        this.barChartLabels[3] = "Miercoles";
        this.barChartLabels[4] = "Jueves";
        this.barChartLabels[5] = "Viernes";
        this.barChartLabels[6] = "Sabado";

        for (let numero of res) {
          if (numero.Anio == this.value) {
            this.barChartData[i].data[numero.Dia - 1] = numero.contador;
          }
        } //for
        //Leyenda de encima
        this.barChartData[i].label = "Estado=1";
        this.randomize();
      });
  }
  getGraficoMes(seleccionadoperiodo: string) {
    console.log("He entrado en GRAFICO MES");
    console.log("El AÑO EN MES vale: " + this.value);
    this.service
      .getConsentimientosTransaccionesGAM()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.datames = res;
        var i = 0;
        this.barChartLabels.length = 0;
        //inicializar barChartData
        for (var j = 0; j <= 11; j++) {
          this.barChartData[0].data[j] = 0;
        }
        console.log(this.barChartData);
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
        } //FOR
        this.barChartData[i].label = "Estado: 1";
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
    console.log(event, active);
  }
  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
  public randomize(): void {
    this.barChartType = this.barChartType === "bar" ? "line" : "bar";
  }
}
