import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import { consentimientovwtransacciones } from "../../../../../models/consentimientovwtransacciones";
import { ConsentimientovwtransaccionesService } from "../../../../../services/consentimientovwtransacciones.service";
@Component({
  selector: "ngx-pie",
  templateUrl: "./pie.component.html",
  styleUrls: ["./pie.component.scss"],
})
export class PieComponent implements OnInit {
  data: consentimientovwtransacciones[];
  constructor(private service: ConsentimientovwtransaccionesService) {}

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "top",
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    },
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ["rgba(255,161,181)", "rgba(134,199,243)"],
    },
  ];
  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
  ngOnInit() {
    this.service
      .getConsentimientosG3()
      .subscribe((res: consentimientovwtransacciones[]) => {
        this.data = res;
        var i = 0;
        for (let numero of res) {
          this.pieChartLabels.push("Estado " + numero.estado);
          this.pieChartData[i] = numero.contador; //Leyenda de encima
          i = i + 1;
        } //for
      });
  }
}
