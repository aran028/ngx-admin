import { Component, OnInit, ɵConsole } from "@angular/core";
import { SingleDataSet, Label } from "ng2-charts";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { consentimientovwtransacciones } from "../../../../../models/consentimientovwtransacciones";
import { ConsentimientovwtransaccionesService } from "../../../../../services/consentimientovwtransacciones.service";

@Component({
  selector: "ngx-polar",
  templateUrl: "./polar.component.html",
  styleUrls: ["./polar.component.scss"],
})
export class PolarComponent implements OnInit {
  data: consentimientovwtransacciones[];
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

  constructor(private service: ConsentimientovwtransaccionesService) {}
  ngOnInit() {
    this.service
      .getConsentimientosG4()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.data = res;
        // Recorrido del res 1 comprobacion
        var i = 0;
        var j = 0;
        var k = 0;
        var ano = 0;
        var marca0 = 0;
        var marca1 = 0;
        var inicio = 0;
        for (let numero of res) {
          // Recorrido del principio
          if (inicio == 0) {
            this.barChartLabels.push(numero.Anio.toString());
            if (numero.estado == 0) {
              this.barChartData[i].data[j] = numero.contador;
              j = j + 1;
              marca0 = 1;
              inicio = inicio + 1;
              ano = numero.Anio;
            } else {
              this.barChartData[1].data[k] = numero.contador;
              k = k + 1;
              marca1 = 1;
              inicio = inicio + 1;
              ano = numero.Anio;
            }
          } else {
            // No es el inicio
            if (ano != numero.Anio) {
              // Preguntamos si marca 0 y marca 1 son 1 pq deben serlo sino les ponemos un 0 y avanzamos 1
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
            if (numero.estado == 0) {
              this.barChartData[i].data[j] = numero.contador;
              j = j + 1;
              marca0 = 1;
              inicio = inicio + 1;
              ano = numero.Anio;
            } else {
              //estado=1
              this.barChartData[1].data[k] = numero.contador;
              k = k + 1;
              marca1 = 1;
              inicio = inicio + 1;
              ano = numero.Anio;
            }
          } // else no es el inicio
        } // for
      }); // for
    this.barChartData[0].label = "Estado 0";
    this.barChartData[1].label = "Estado 1";
  }
}
