import { Component, EventEmitter, Output } from '@angular/core';
import { monthsObj } from 'app/core/constant/month_obj';
import { DateModel, freqObject } from 'app/core/models/common_model';
import { OrderResModel } from 'app/core/models/enroll_models';
import { DashboardSalesService } from 'app/core/services/admin/dashboard_sales_service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-sales-page',
  templateUrl: './admin-sales-page.component.html',
  styleUrl: './admin-sales-page.component.scss',
  providers: [DashboardSalesService]
})
export class AdminSalesPageComponent {

  destroy$ = new Subject<void>()
  orderList !: OrderResModel[];
  viewList !: { data: number[], categories: any[] };


  @Output() chartLoad = new EventEmitter()


  constructor(
    private salesService: DashboardSalesService
  ) { }

  ngOnInit() {
    this.fetchChartDetails()
  }

  fetchChartDetails() {
    this.salesService.getChartDetails()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.orderList = res.orders;
          this.setChart()
        },
        error: err => {
          console.error('Error fetching chart details:', err);
        }
      });
  }

  dateSelected(event : DateModel ){
    const {year,month,date} = event
    this.setChart(year,month,date)
  }

  setChart(year?: number, month?: number, date?: number) {
    const datas: freqObject = this.filterDatas(year, month, date)
    const categories = Object.keys(datas)
    const data = Object.values(datas)
 
    // emits event to the chart
    this.chartLoad.emit({ data, categories })
  }

  filterDatas(year?: number, month?: number, date?: number) {

    const yyyy = year || new Date().getFullYear()
    const mm = month || new Date().getMonth()
    if (!month && !date) {
      return this.getYearly(yyyy)
    }

    if(!date){
      return this.getMonthly(yyyy,mm)
    }
    return this.getDaily(yyyy,mm,date)
  }

  getYearly(year: number): freqObject | any {
    const freq: freqObject = {};
    const yearlyOrder = this.orderList.filter(each => new Date(each.createdAt).getFullYear() === year)
    yearlyOrder.forEach(each => {
      let idx = new Date(each.createdAt).getMonth() + 1
      freq[monthsObj[idx]] = freq[monthsObj[idx]] ? freq[monthsObj[idx]] + each.amountPayable : each.amountPayable;
    })

    return freq
  }

  getMonthly(year : number, month : number){
    const freq: freqObject = {};
    const monthlyOrders = this.orderList.filter(each =>{
      const y = new Date(each.createdAt).getFullYear();
      const m = new Date(each.createdAt).getMonth()+1;

      if(year === y && month === m) return each;

      return;
    })

    monthlyOrders.forEach(each => {
      let idx = new Date(each.createdAt).getDate()
      freq[idx] = freq[idx]  ? freq[idx]  + each.amountPayable : each.amountPayable;
    })

    return freq;
  }

  getDaily(year : number,month : number,date : number){
    const freq: freqObject = {};

    const dailyOrders = this.orderList.filter(each =>{
      const y = new Date(each.createdAt).getFullYear();
      const m = new Date(each.createdAt).getMonth()+1;
      const d = new Date(each.createdAt).getDate()

      if(year === y && month === m && date === d) return each;

      return;
    })

    dailyOrders.forEach(each => {
      let idx = new Date(each.createdAt).getHours()+':'+new Date(each.createdAt).getMinutes()
      freq[idx] = freq[idx]  ? freq[idx]  + each.amountPayable : each.amountPayable;
    })

    return freq;
  }


  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
