import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"
import { Observable } from "rxjs"
import { PasswordUpdate, TutorUpdateModel } from "../../models/student"
import { TutorEducation, TutorModel, TutorTagResponse} from "../../models/tutor"
import { CourseDetails, CourseDetailsResponse } from "../../models/course"
import { environment } from "environments/environment"

const BASE_URL = environment.BASE_URL

@Injectable({providedIn  :'root'})
export class TutorProfileService{
    constructor(private http : HttpClient, private router : Router){}

    getData() : Observable<TutorModel>{
        return this.http.get<TutorModel>(`${BASE_URL}/tutor/profile`)
    }

    updateProfile(Data : TutorUpdateModel){
        return this.http.put(`${BASE_URL}/tutor/update`,Data)
    }

    
    updateProfilePic(Data : FormData) : Observable<{msg : string , path : string}>{
        return this.http.put<{msg : string , path : string}>(`${BASE_URL}/tutor/update-pic`,Data)
    }

    resetPassword(Data : PasswordUpdate){
        return this.http.put(`${BASE_URL}/tutor/reset-password`,Data)
    }

    logout(){
        sessionStorage.removeItem('auth_token')
        this.router.navigateByUrl('/tutor/login')
    }

    updateEducation(Data : TutorEducation){
        return this.http.put<{educationDetails : TutorEducation}>(`${BASE_URL}/tutor/update-education`,Data)
    }

    updateTags(Data : {tag : string, list: string}){
        return this.http.put<{msg : string , tutorTag :{ tag : string,list : TutorTagResponse} }>(`${BASE_URL}/tutor/update-tags`,Data)
    }

    deleteEducation(id : string){
        return this.http.delete<{toDelete : TutorEducation}>(`${BASE_URL}/tutor/delete-education/${id}`)
    }


    getCourses(){
        return this.http.get<{tutorCourses : CourseDetailsResponse[]}>(`${BASE_URL}/tutor/courses`)
    }

    requestCourse(data : CourseDetails){
        return this.http.post<{ newCourse: CourseDetailsResponse }>(`${BASE_URL}/tutor/request-course`, data)
    }
}