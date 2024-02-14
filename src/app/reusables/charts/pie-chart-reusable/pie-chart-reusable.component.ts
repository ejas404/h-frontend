import { Component, EventEmitter, Input, ViewChild } from '@angular/core';
import { PieChartOptions, PieChartResModel } from 'app/core/models/chart_model';
import { DashboardSalesService } from 'app/core/services/admin/dashboard_sales_service';
import { ChartComponent } from 'ng-apexcharts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pie-chart-reusable',
  templateUrl: './pie-chart-reusable.component.html',
  styleUrl: './pie-chart-reusable.component.scss',
  providers: [DashboardSalesService]
})
export class PieChartReusableComponent {

  destroy$ !: Subscription;

  pieChartList !: PieChartResModel;
  @Input() loadEvent !: EventEmitter<null>;
  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions: Partial<PieChartOptions>;
  

  constructor() {
    this.chartOptions = {}; // Initialize chartOptions
  }

  ngOnInit() {
   this.destroy$ = this.loadEvent
   .subscribe({
    next : (response : PieChartResModel) =>{
      this.pieChartList = response;
      this.setChartOptions();
    }
   })
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
              height : 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnDestroy(){
    this.destroy$.unsubscribe()
  }

}
