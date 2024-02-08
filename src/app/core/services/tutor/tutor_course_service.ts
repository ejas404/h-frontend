import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "app/core/constant/uri";
import { CourseDetails, CourseDetailsResponse } from "app/core/models/course";
import { VideoWithUrl } from "app/core/models/section_video_model";
import { Observable } from "rxjs";

@Injectable()
export class TutorCourseService {
    constructor(
        private http: HttpClient
    ) { }
    
    uploadVideo(Data: FormData): Observable<{ msg: string, path: string }> {
        return this.http.put<{ msg: string, path: string }>(`${BASE_URL}/tutor/add-video`, Data)
    }
    getVideo(id : string){
        return this.http.get<{video : VideoWithUrl}>(`${BASE_URL}/tutor/get-video/${id}`)
    }

    updateCourseCover(Data: FormData, id: string): Observable<{ msg: string, path: string }> {
        return this.http.put<{ msg: string, path: string }>(`${BASE_URL}/tutor/course-cover/${id}`, Data)
    }

    getSingleCourse(id: string) {
        return this.http.get<{ courseDetails: CourseDetailsResponse }>(`${BASE_URL}/tutor/course/${id}`)
    }

    updateCourse(data: CourseDetails, id: string) {
        return this.http.put<{ updatedCourse: CourseDetailsResponse }>(`${BASE_URL}/tutor/update-course/${id}`, data)
    }

}