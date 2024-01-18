import { Injectable } from "@angular/core";
import { SectionFormDetails, SectionResponse } from "../models/section_video_model";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../constant/uri";
import { CourseVideoResponseList } from "../models/course";

@Injectable({
    providedIn : 'root'
})
export class CourseService{

    constructor(private http: HttpClient) { }

    //parameter route is to specify which route to request eg : admin / tutor

    addSection(Data : SectionFormDetails,route : string){
        return this.http.post<{ msg: string }>(`${BASE_URL}/${route}/add-section`, Data)
    }

    editSection(Data : SectionFormDetails,id : string,route : string){
        return this.http.put<{ msg: string }>(`${BASE_URL}/${route}/edit-section/${id}`, Data)
    }

    getSections(id : string){
        return this.http.get<{sectionLists : SectionResponse[]}>(`${BASE_URL}/course/get-sections/${id}`)
    }

    getCourseVideoList(id : string, route : string){
        return this.http.get<{courseVideoList : CourseVideoResponseList[]}>(`${BASE_URL}/${route}/get-course-videos/${id}`)
    }
}