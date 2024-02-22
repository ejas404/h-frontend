import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginCredential, RegisterModel } from "../models/auth";
import { Observable } from "rxjs";
import { environment } from "environments/environment";

const BASE_URL = environment.BASE_URL


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

    getGoogleAuth(code : string){
        return this.http.get(`${BASE_URL}/student/oauth?code=${code}`)
    }

}