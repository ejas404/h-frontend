import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../constant/uri";
import { LoginCredential, RegisterModel } from "../models/auth";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class AuthService{
    constructor(private http : HttpClient){}

    adminLogin(reqBody : LoginCredential) : Observable<any>{
        return this.http.post(`${BASE_URL}/admin/login`,reqBody)
    }

    studentLogin(reqBody : LoginCredential) : Observable<any>{
        return this.http.post(`${BASE_URL}/student/login`,reqBody)
    }

    tutorLogin(reqBody : LoginCredential) : Observable<any>{
        return this.http.post(`${BASE_URL}/tutor/login`,reqBody)
    }

    studentRegister(reqBody : RegisterModel): Observable<any>{
        return this.http.post(`${BASE_URL}/student/register`,reqBody)
    }

    tutorRegister(reqBody : RegisterModel): Observable<any>{
        return this.http.post(`${BASE_URL}/tutor/register`,reqBody)
    }

}