import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "app/core/constant/uri";
import { keyString } from "app/core/models/common_model";
import { EnrollCourseModels, EnrollSubcat } from "app/core/models/enroll_models";
import { CheckOutResponse } from "app/core/models/server_response_model";


@Injectable()
export class StudentEnrollService{
    constructor(
        private http : HttpClient
    ){}

    checkOut(data : FormData){
        return this.http.post<CheckOutResponse>(`${BASE_URL}/student/checkout`,data)
    }

    checkPayment(id : string){
        return this.http.get<{success : boolean}>(`${BASE_URL}/student/payment/status/${id}`)
    }

    getEnrollList(){
        return this.http.get<{list : EnrollCourseModels[]}>(`${BASE_URL}/student/enroll-list`)
    }

    getEnrollCategory(){
        return this.http.get<{subCatObj : EnrollSubcat[] }>(`${BASE_URL}/student/enroll-cat`)
    }

    isEnrolled(id : string){
        return this.http.get<{success : boolean}>(`${BASE_URL}/student/enroll-status/${id}`)
    }

    isCourseEnrolled(id : string){
        return this.http.get<{success : boolean}>(`${BASE_URL}/student/course-enroll/${id}`)
    }

    rateEnrollment(val : number,enid : string){
        return this.http.put<{msg : string}>(`${BASE_URL}/student/rate-enrollment`,{val, enid})
    }
}