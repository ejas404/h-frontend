import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { BASE_URL } from "app/core/constant/uri"
import { PopularCourseModel } from "app/core/models/dashboard_model"

@Injectable()
export class DashboardSalesService{
    constructor(
        private http : HttpClient
    ){}

    
    getPopularCourses(){
        return this.http.get<{popularCourses : PopularCourseModel[]}>(`${BASE_URL}/admin/popular-courses`)
    }
    
}