import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "app/core/constant/uri";
import { VideoWithUrl } from "app/core/models/section_video_model";

@Injectable()
export class StudentCourseService{
    constructor(
        private http : HttpClient
    ){}

    addToCart(id : string){
        return this.http.put<{msg : string}>(`${BASE_URL}/student/add-to-cart/${id}`,{})
    }
    
    getVideo(id : string){
        return this.http.get<{video : VideoWithUrl}>(`${BASE_URL}/student/get-video/${id}`)
    }
}