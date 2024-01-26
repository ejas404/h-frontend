import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "app/core/constant/uri";
import { CourseDetailsResponse, UpcomingCourse } from "app/core/models/course";

@Injectable()
export class DashboardCourseService{
    constructor(
        private http : HttpClient
    ){}

    addUpcoming(data : FormData){
        return this.http.post<{ newCourse: UpcomingCourse }>(`${BASE_URL}/admin/add-upcoming-course`, data)
    }
}