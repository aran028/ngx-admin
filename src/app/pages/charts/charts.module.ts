import { NgModule } from "@angular/core";
import { NgxEchartsModule } from "ngx-echarts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartModule } from "angular2-chartjs";
import { NbCardModule } from "@nebular/theme";

import { ThemeModule } from "../../@theme/theme.module";

import { ChartsRoutingModule, routedComponents } from "./charts-routing.module";
import { ChartjsBarComponent } from "./chartjs/chartjs-bar.component";
import { ChartjsLineComponent } from "./chartjs/chartjs-line.component";
import { ChartjsPieComponent } from "./chartjs/chartjs-pie.component";
import { ChartjsBarHorizontalComponent } from "./chartjs/chartjs-bar-horizontal.component";
import { EchartsPieComponent } from "./echarts/echarts-pie.component";
import { EchartsBarComponent } from "./echarts/echarts-bar.component";
import { EchartsAreaStackComponent } from "./echarts/echarts-area-stack.component";

const components = [
  ChartjsBarComponent,
  ChartjsLineComponent,
  ChartjsPieComponent,
  ChartjsBarHorizontalComponent,
  EchartsPieComponent,
  EchartsBarComponent,
  EchartsAreaStackComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    ChartsRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbCardModule,
  ],
  declarations: [...routedComponents, ...components],
})
export class ChartsModule {}
