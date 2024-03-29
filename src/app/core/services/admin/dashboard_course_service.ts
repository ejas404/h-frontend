import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AdminCourseTutorResponse } from "app/core/models/admin_model";
import { CourseDetailsResponse, UpcomingCourse } from "app/core/models/course";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

const BASE_URL = environment.BASE_URL

@Injectable()
export class DashboardCourseService {
    constructor(
        private http: HttpClient
    ) { }

    addUpcoming(data: FormData) {
        return this.http.post<{ newCourse: UpcomingCourse }>(`${BASE_URL}/admin/add-upcoming-course`, data)
    }

    getUpcomingCourses() {
        return this.http.get<{ upcomingCourses: UpcomingCourse[] }>(`${BASE_URL}/admin/upcoming-courses`)
    }

    addCourse(data: FormData) {
        return this.http.post<{ newCourse: CourseDetailsResponse }>(`${BASE_URL}/admin/add-course`, data)
    }

    getCourses() {
        return this.http.get<AdminCourseTutorResponse>(`${BASE_URL}/admin/courses`)
    }

    updateCourseCover(Data: FormData, id: string): Observable<{ msg: string, path: string }> {
        return this.http.put<{ msg: string, path: string }>(`${BASE_URL}/admin/course-cover/${id}`, Data)
    }

    getSingleCourse(id: string) {
        return this.http.get<{ courseDetails: CourseDetailsResponse }>(`${BASE_URL}/admin/course/${id}`)
    }

    approveCourseRequest(id : string){
        return this.http.put<{courseDetails : CourseDetailsResponse}>(`${BASE_URL}/admin/course-approve/${id}`, {})
    }
}