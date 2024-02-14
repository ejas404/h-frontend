import { Component, Input, ViewChild } from '@angular/core';
import { LineChartOptions } from 'app/core/models/chart_model';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'bargraph-chart-reusable',
  templateUrl: './bargraph-chart-reusable.component.html',
  styleUrl: './bargraph-chart-reusable.component.scss'
})
export class BargraphChartReusableComponent {
  @Input()viewList : any;
  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions: Partial<LineChartOptions>;

  constructor() {
    this.chartOptions = {};
  }

  ngOnInit(){
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [this?.viewList?.data]
        }
      ],
      chart: {
        height: 200,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Sales",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [this?.viewList?.categories]
      }
    };
  }

}
