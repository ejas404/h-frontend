import { Component, EventEmitter, Input, ViewChild } from '@angular/core';
import { LineChartOptions } from 'app/core/models/chart_model';
import { ChartComponent } from 'ng-apexcharts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bargraph-chart-reusable',
  templateUrl: './bargraph-chart-reusable.component.html',
  styleUrl: './bargraph-chart-reusable.component.scss'
})
export class BargraphChartReusableComponent {

  destroy$ !: Subscription;
  viewList: any;
  @ViewChild("chart") chart !: ChartComponent;
  @Input() loadEvent !: EventEmitter<null>;
  public chartOptions: Partial<LineChartOptions>;

  constructor() {
    this.chartOptions = {};
  }

  ngOnInit() {
    this.destroy$ = this.loadEvent
      .subscribe({
        next: (response: any) => {
          this.viewList = response;
          this.loadChart()
        }
      })

  }


  loadChart() {
    this.chartOptions = {
      series: [
        {
          name: "courses",
          data: this.viewList.data
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
        categories: this.viewList.categories
      }
    };
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe()
  }
}
