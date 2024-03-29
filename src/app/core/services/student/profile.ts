import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OtpModel, UserModel } from "../../models/auth";
import { PasswordUpdate, StudentUpdateModel } from "../../models/student";
import { Router } from "@angular/router";
import { environment } from "environments/environment";

const BASE_URL = environment.BASE_URL

@Injectable({
    providedIn : 'root'
})
export class StudentProfileService{
    constructor(private http : HttpClient, private router : Router){}

    getData() : Observable<UserModel>{
        return this.http.get<UserModel>(`${BASE_URL}/student/profile`)
    }

    updateProfile(Data : StudentUpdateModel){
        return this.http.put(`${BASE_URL}/student/update`,Data)
    }

    updateProfilePic(Data : FormData):Observable<{msg : string , path : string}> {
        return this.http.put<{msg : string , path : string}>(`${BASE_URL}/student/update-pic`,Data)
    }

    resetPassword(Data : PasswordUpdate){
        return this.http.put(`${BASE_URL}/student/reset-password`,Data)
    }

    logout(){
        sessionStorage.removeItem('auth_token')
        this.router.navigateByUrl('/login')
    }

    getOtp(email : string){
        return this.http.get<{msg : string}>(`${BASE_URL}/student/otp/${email}`)
    }

    

    submitOtp(reqBody : OtpModel){
        return this.http.post<{msg : string}>(`${BASE_URL}/student/otp-login`,reqBody,{withCredentials : true})
    }
}