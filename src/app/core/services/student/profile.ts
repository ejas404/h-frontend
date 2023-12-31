import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../../constant/uri";
import { Observable } from "rxjs";
import { UserModel } from "../../models/auth";
import { getStudentHeaders } from "../../utils/header";
import { PasswordUpdate, StudentUpdateModel } from "../../models/student";
import { Router } from "@angular/router";



@Injectable({
    providedIn : 'root'
})
export class StudentProfileService{
    constructor(private http : HttpClient, private router : Router){}

    getData() : Observable<UserModel>{
        let headers = getStudentHeaders()
        return this.http.get<UserModel>(`${BASE_URL}/student/profile`,{headers})
    }

    isBlocked() : boolean | void  {
        let headers = getStudentHeaders()
        this.http.get<UserModel>(`${BASE_URL}/student/profile`,{headers})
            .subscribe({
                next : (data)=>{
                    return true
                },
                error : (err)=>{
                    console.log('error printed')
                    console.log(err)
                    return false
                }
            })
    }

    updateProfile(Data : StudentUpdateModel){
        let headers = getStudentHeaders()
        return this.http.put(`${BASE_URL}/student/update`,Data,{headers})
    }

    updateProfilePic(Data : FormData):Observable<{msg : string , path : string}> {
        let headers = getStudentHeaders()
        return this.http.put<{msg : string , path : string}>(`${BASE_URL}/student/update-pic`,Data,{headers})
    }

    resetPassword(Data : PasswordUpdate){
        let headers = getStudentHeaders()
        return this.http.put(`${BASE_URL}/student/reset-password`,Data,{headers})
    }

    logout(){
        sessionStorage.removeItem('student-token')
        this.router.navigateByUrl('/login')
    }
}