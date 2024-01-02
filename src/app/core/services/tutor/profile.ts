import { Injectable } from "@angular/core"
import { getTutorHeaders } from "../../utils/header"
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"
import { Observable } from "rxjs"
import { BASE_URL } from "../../constant/uri"
import { PasswordUpdate, TutorUpdateModel } from "../../models/student"
import { TutorEducation, TutorModel, TutorTagResponse} from "../../models/tutor"
import { CourseDetails, CourseDetailsResponse } from "../../models/course"




@Injectable({
    providedIn : 'root'
})
export class TutorProfileService{
    constructor(private http : HttpClient, private router : Router){}

    getData() : Observable<TutorModel>{
        let headers = getTutorHeaders()
        return this.http.get<TutorModel>(`${BASE_URL}/tutor/profile`,{headers})
    }

    updateProfile(Data : TutorUpdateModel){
        let headers = getTutorHeaders()
        return this.http.put(`${BASE_URL}/tutor/update`,Data,{headers})
    }

    
    updateProfilePic(Data : FormData) : Observable<{msg : string , path : string}>{
        let headers = getTutorHeaders()
        return this.http.put<{msg : string , path : string}>(`${BASE_URL}/tutor/update-pic`,Data,{headers})
    }

    resetPassword(Data : PasswordUpdate){
        let headers = getTutorHeaders()
        return this.http.put(`${BASE_URL}/tutor/reset-password`,Data,{headers})
    }

    logout(){
        sessionStorage.removeItem('tutor-token')
        this.router.navigateByUrl('/tutor/login')
    }

    updateEducation(Data : TutorEducation){
        let headers = getTutorHeaders()
        return this.http.put<{educationDetails : TutorEducation}>(`${BASE_URL}/tutor/update-education`,Data,{headers})
    }

    updateTags(Data : {tag : string, list: string}){
        let headers = getTutorHeaders()
        return this.http.put<{msg : string , tutorTag :{ tag : string,list : TutorTagResponse} }>(`${BASE_URL}/tutor/update-tags`,Data,{headers})
    }

    deleteEducation(id : string){
        let headers = getTutorHeaders()
        return this.http.delete<{toDelete : TutorEducation}>(`${BASE_URL}/tutor/delete-education/${id}`,{headers})
    }


    getCourses(){
        let headers = getTutorHeaders()
        return this.http.get<{tutorCourses : CourseDetailsResponse[]}>(`${BASE_URL}/tutor/courses`, { headers })
    }

    requestCourse(data : CourseDetails){
        let headers = getTutorHeaders()
        return this.http.post<{ newCourse: CourseDetailsResponse }>(`${BASE_URL}/tutor/request-course`, data, { headers })
    }
}