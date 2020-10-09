import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Label } from "ng2-charts";
//importamos el modelo ConsentimientovwTransacciones para la grafica
import { consentimientovwtransacciones } from "../../../../models/consentimientovwtransacciones";
//importo el servicio para mostrar datos en gráfica
import { ConsentimientovwtransaccionesService } from "../../../../services/consentimientovwtransacciones.service";
import { sign } from "crypto";
import { NumberWithCommasPipe } from "../../../../@theme/pipes";
//import * as pluginAnnotations from "chartjs-plugin-annotation";

@Component({
  selector: "ngx-barra",
  templateUrl: "./barra.component.html",
  styleUrls: ["./barra.component.scss"],
})
export class BarraComponent {
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

  public barChartData: ChartDataSets[] = [
    { data: [], label: "" },
    { data: [], label: "" },
  ];

  constructor(private service: ConsentimientovwtransaccionesService) {
    this.recargaGraficoAnos();
  }

  ngOnInit() {
    //Al iniciar se ejectua la consulta http://localhost:3000/consentimientosG1
    //Es decir cuenta por año los registros que tienen el estado=1
    //se carga el desplegable con estos datos
    this.service
      .getConsentimientosG1()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.data = res;
      });
  }

  recargaGraficoAnos() {
    this.service
      .getConsentimientosTransaccionesFirma()
      .subscribe((res1: consentimientovwtransacciones[]) => {
        this.datai = res1;
        console.log(this.datai);
        //Recorrido del res 1 comprobacion
        var i = 0;
        var j = 0;
        var k = 0;
        var ano = 0;
        var marca0 = 0;
        var marca1 = 0;
        var inicio = 0;
        for (let numero of res1) {
          //Recorrido del principio
          if (inicio == 0) {
            console.log(
              "AÑO:" +
                numero.Anio +
                "Firma casa" +
                numero.firma_casa +
                numero.contador
            );
            this.barChartLabels.push(numero.Anio.toString());
            if (numero.firma_casa == 0) {
              this.barChartData[i].data[j] = numero.contador;
              console.log("Y he entrado en FIRMA CASA=0");
              console.log("El array VALE" + this.barChartData[i].data[j]);
              j = j + 1;
              marca0 = 1;
              inicio = inicio + 1;
              ano = numero.Anio;
            } else {
              //firma casa=1
              this.barChartData[1].data[k] = numero.contador;
              k = k + 1;
              console.log("FIRMA CASA=1" + numero.contador);
              marca1 = 1;
              inicio = inicio + 1;
              ano = numero.Anio;
            }
          } else {
            //No es el inicio
            if (ano != numero.Anio) {
              //Preguntamos si marca 0 y marca 1 son 1 pq deben serlo sino les ponemos un 0 y avanzamos 1
              if (marca0 == 0) {
                this.barChartData[i].data[j] = 0;
                j = j + 1;
              }
              if (marca1 == 0) {
                this.barChartData[1].data[k] = 0;
                k = k + 1;
              }
              this.barChartLabels.push(numero.Anio.toString());
            }
            if (numero.firma_casa == 0) {
              this.barChartData[i].data[j] = numero.contador;
              console.log("Y he entrado en FIRMA CASA=0");
              console.log("El array VALE" + this.barChartData[i].data[j]);
              j = j + 1;
              marca0 = 1;
              inicio = inicio + 1;
              ano = numero.Anio;
            } else {
              //firma casa=1
              this.barChartData[1].data[k] = numero.contador;
              k = k + 1;
              console.log("FIRMA CASA=1" + numero.contador);
              marca1 = 1;
              inicio = inicio + 1;
              ano = numero.Anio;
            }
          } //else no es el inicio
        } //for
      }); //for
    this.barChartData[0].label = "Firma en Local";
    this.barChartData[1].label = "Firma en Casa";
    this.periodo = "year"; //for //}
  } //for
  //Metodo de llamada del select del año
  setAnio(value: number) {
    console.log("EL AÑO SELECCIONADO ES " + value);
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
        this.randomize();
        break;
    }
  }
  //Seleccionando por year
  getGraficoYear(seleccionadoperiodo: string) {
    console.log("He entrado en GRAFICO AÑO");
    console.log("El AÑO vale" + this.value);
    this.randomize();
    this.service
      .getConsentimientosTransaccionesFirma()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.datayear = res;
        let unicos = [];
        res.forEach((it) => {
          if (unicos.indexOf(it) == -1) unicos.push(it);
        });
        console.log(unicos);
        var i = 0;
        var j = 0;
        var sumaContadorF0 = 0;
        var sumaContadorF1 = 0;
        for (let numero of res) {
          //Preguntas por el año
          if (numero.Anio == this.value) {
            //Preguntamos por la firma casa
            console.log("AÑO:" + this.value + "Firma casa" + numero.firma_casa);
            if (numero.firma_casa == 0) {
              sumaContadorF0 = numero.contador;
              console.log(
                "Año" +
                  numero.Anio +
                  "DENTRO FIRMA 0 0 0 y vale" +
                  sumaContadorF0
              );
            } else {
              sumaContadorF1 = numero.contador;
              console.log("DENTRO DE FIRMA 1 1 1y vale" + sumaContadorF1);
            }
          }
        } //for
        //Rellenamos los barCharts
        this.barChartLabels.length = 0;
        this.barChartLabels.push(this.value.toString());
        this.barChartData[i].data[j] = sumaContadorF0;
        this.barChartData[1].data[j] = sumaContadorF1;
        //Leyenda de encima
        this.barChartData[i].label = "Firma en Local";
        this.barChartData[i + 1].label = "Firma en Casa";
        this.randomize();
      });
  }
  getGraficoMes(seleccionadoperiodo: string) {
    console.log("He entrado en GRAFICO MES");
    console.log("El AÑO EN MES vale: " + this.value);
    this.service
      .getConsentimientosTransaccionesGAFM()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.datames = res;
        var i = 0;
        this.barChartLabels.length = 0;
        //inicializar barChartData
        for (var j = 0; j <= 11; j++) {
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
        //inicializar barChartData
        for (var j = 0; j <= 11; j++) {
          this.barChartData[0].data[j] = 0;
          this.barChartData[1].data[j] = 0;
        }

        for (let numero of res) {
          if (numero.Anio == this.value) {
            if (numero.firma_casa == 0) {
              this.barChartData[i].data[numero.Mes - 1] = numero.contador;
            } //firma casa=1
            else {
              this.barChartData[1].data[numero.Mes - 1] = numero.contador;
            }
          }
        } //for
        //Leyenda de encima
        this.barChartData[i].label = "Firma en Local";
        this.barChartData[i + 1].label = "Firma en Casa";
        this.randomize();
      });
  }
  getGraficoWeek(seleccionadoperiodo: string) {
    console.log("GRAFICO SEMANA");
    console.log("El AÑO ES " + this.value);
    this.service
      .getConsentimientosTransaccionesGAFW()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.datasemana = res;
        console.log(this.datasemana);
        var i = 0;
        var j = 0;
        this.barChartLabels.length = 0;
        //inicializar barChartData
        for (var j = 0; j <= 6; j++) {
          this.barChartData[0].data[j] = 0;
          this.barChartData[1].data[j] = 0;
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
            if (numero.firma_casa == 0) {
              this.barChartData[i].data[numero.Dia - 1] = numero.contador;
            } //firma casa=1
            else {
              this.barChartData[1].data[numero.Dia - 1] = numero.contador;
            }
          }
        } //for
        //Leyenda de encima
        this.barChartData[i].label = "Firma en Local";
        this.barChartData[i + 1].label = "Firma en Casa";
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