import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CourseDetailsResponse } from "../../models/course";
import { environment } from "environments/environment";

const BASE_URL = environment.BASE_URL

@Injectable()
export class HomePageCourseService {
    constructor(private http: HttpClient) { }

    getCourses() {
        return this.http.get<{ courses: CourseDetailsResponse[] }>(`${BASE_URL}/course`)
    }

    getSingleCourse(id: string) {
        return this.http.get<{ courseDetails: CourseDetailsResponse }>(`${BASE_URL}/course/${id}`)
    }

}