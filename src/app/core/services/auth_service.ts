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
        return this.http.post(`${BASE_URL}/admin/login`,reqBody, {withCredentials : true})
    }

    studentLogin(reqBody : LoginCredential) : Observable<any>{
        return this.http.post(`${BASE_URL}/student/login`,reqBody, {withCredentials : true})
    }

    tutorLogin(reqBody : LoginCredential) : Observable<any>{
        return this.http.post(`${BASE_URL}/tutor/login`,reqBody, {withCredentials : true})
    }

    studentRegister(reqBody : RegisterModel): Observable<any>{
        return this.http.post(`${BASE_URL}/student/register`,reqBody, {withCredentials : true})
    }

    tutorRegister(reqBody : RegisterModel): Observable<any>{
        return this.http.post(`${BASE_URL}/tutor/register`,reqBody, {withCredentials : true})
    }

}