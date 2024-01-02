import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../../constant/uri";
import { CourseDetailsResponse } from "../../models/course";

@Injectable({
    providedIn: 'root'
})
export class HomePageCourseService {
    constructor(private http: HttpClient) { }

    getCourses() {
        return this.http.get<{ courses: CourseDetailsResponse[] }>(`${BASE_URL}/student/courses`)
    }

    getSingleCourse(id: string) {
        return this.http.get<{ courseDetails: CourseDetailsResponse }>(`${BASE_URL}/student/course/${id}`)
    }
}