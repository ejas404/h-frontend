import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../../constant/uri";
import { Observable } from "rxjs";
import { UserModel } from "../../models/auth";
import { getStudentHeaders } from "../../utils/header";
import { PasswordUpdate, StudentUpdateModel } from "../../models/student";



@Injectable({
    providedIn : 'root'
})
export class StudentProfileService{
    constructor(private http : HttpClient){}

    getData() : Observable<UserModel>{
        let headers = getStudentHeaders()
        return this.http.get<UserModel>(`${BASE_URL}/student/profile`,{headers})
    }

    updateProfile(Data : StudentUpdateModel){
        let headers = getStudentHeaders()
        return this.http.put(`${BASE_URL}/student/update`,Data,{headers})
    }

    resetPassword(Data : PasswordUpdate){
        let headers = getStudentHeaders()
        return this.http.put(`${BASE_URL}/student/reset-password`,Data,{headers})
    }
}