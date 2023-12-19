import { Injectable } from "@angular/core"
import { getTutorHeaders } from "../../utils/header"
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"
import { UserModel } from "../../models/auth"
import { Observable } from "rxjs"
import { BASE_URL } from "../../constant/uri"
import { PasswordUpdate, TutorUpdateModel } from "../../models/student"




@Injectable({
    providedIn : 'root'
})
export class TutorProfileService{
    constructor(private http : HttpClient, private router : Router){}

    getData() : Observable<UserModel>{
        let headers = getTutorHeaders()
        return this.http.get<UserModel>(`${BASE_URL}/tutor/profile`,{headers})
    }

    updateProfile(Data : TutorUpdateModel){
        let headers = getTutorHeaders()
        return this.http.put(`${BASE_URL}/tutor/update`,Data,{headers})
    }

    resetPassword(Data : PasswordUpdate){
        let headers = getTutorHeaders()
        return this.http.put(`${BASE_URL}/tutor/reset-password`,Data,{headers})
    }

    logout(){
        sessionStorage.removeItem('tutor-token')
        this.router.navigateByUrl('/login')
    }
}