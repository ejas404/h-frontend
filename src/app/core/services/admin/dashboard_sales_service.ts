import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { BASE_URL } from "app/core/constant/uri"
import { PieChartResModel } from "app/core/models/chart_model"
import { PopularCourseModel } from "app/core/models/dashboard_model"
import { OrderResModel } from "app/core/models/enroll_models"

@Injectable()
export class DashboardSalesService{
    constructor(
        private http : HttpClient
    ){}

    
    getPopularCourses(){
        return this.http.get<{popularCourses : PopularCourseModel[]}>(`${BASE_URL}/admin/popular-courses`)
    }

    getChartDetails(){
        return this.http.get<{pieChart : PieChartResModel , orders : OrderResModel[]}>(`${BASE_URL}/admin/chart`)
    }
    
}