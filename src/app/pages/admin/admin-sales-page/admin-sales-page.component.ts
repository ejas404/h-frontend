import { Component, EventEmitter, Output } from '@angular/core';
import { PieChartResModel } from 'app/core/models/chart_model';
import { DashboardSalesService } from 'app/core/services/admin/dashboard_sales_service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-sales-page',
  templateUrl: './admin-sales-page.component.html',
  styleUrl: './admin-sales-page.component.scss',
  providers : [DashboardSalesService]
})
export class AdminSalesPageComponent {

  destroy$ = new Subject<void>()
  pieChartList !: PieChartResModel;
  
  @Output()chartLoad = new EventEmitter()


  constructor(
    private salesService : DashboardSalesService
  ){}

  ngOnInit(){
    this.fetchChartDetails()
  }
  
  fetchChartDetails() {
    this.salesService.getChartDetails()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: res => {
        this.pieChartList = res.pieChart;
        this.chartLoad.emit(res.pieChart)
      },
      error: err => {
        console.error('Error fetching chart details:', err);
      }
    });
  }



  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }


}
