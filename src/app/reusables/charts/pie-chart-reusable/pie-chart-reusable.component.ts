import { Component, Input, ViewChild } from '@angular/core';
import { PieChartOptions, PieChartResModel } from 'app/core/models/chart_model';
import { DashboardSalesService } from 'app/core/services/admin/dashboard_sales_service';
import { ApexNonAxisChartSeries, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'pie-chart-reusable',
  templateUrl: './pie-chart-reusable.component.html',
  styleUrl: './pie-chart-reusable.component.scss',
  providers: [DashboardSalesService]
})
export class PieChartReusableComponent {
  @Input() pieChartList !: PieChartResModel;
  @Input() num !: number;
  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions: Partial<PieChartOptions>;

  constructor(private salesService: DashboardSalesService) {
    this.chartOptions = {}; // Initialize chartOptions
  }

  ngOnInit() {
    this.fetchChartDetails();
  }

  fetchChartDetails() {
    this.salesService.getChartDetails().subscribe({
      next: res => {
        this.pieChartList = res.pieChart;
        this.setChartOptions()
      },
      error: err => {
        console.error('Error fetching chart details:', err);
      }
    });
  }

  setChartOptions() {
    this.chartOptions = { 
      series: this.pieChartList.catCount,
      chart: {
        type: "donut"
      },
      labels: this.pieChartList.catName,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 50
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}
