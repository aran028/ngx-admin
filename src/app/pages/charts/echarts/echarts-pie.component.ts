import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: "ngx-echarts-pie",
  template: ` <div echarts [options]="options" class="echart"></div> `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [
          colors.warningLight,
          colors.infoLight,
          colors.dangerLight,
          colors.successLight,
          colors.primaryLight,
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "Odontología",
            "Ginecología",
            "Anestesía",
            "Urología",
            "Psicología",
          ],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: "Especialidades",
            type: "pie",
            radius: "80%",
            center: ["50%", "50%"],
            data: [
              { value: 62, name: "Odontologia" },
              { value: 7, name: "Ginecología" },
              { value: 6, name: "Anestesía" },
              { value: 3, name: "Urología" },
              { value: 5, name: "Psicología" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
