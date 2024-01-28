import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "app/core/constant/uri";
import { VideoWithUrl } from "app/core/models/section_video_model";
import { Observable } from "rxjs";

@Injectable()
export class DashboardVideoService{
    constructor(
        private http : HttpClient
    ){}

    uploadVideo(Data: FormData): Observable<{ msg: string, path: string }> {
        return this.http.put<{ msg: string, path: string }>(`${BASE_URL}/admin/add-video`, Data)
    }
    getVideo(id : string){
        return this.http.get<{video : VideoWithUrl}>(`${BASE_URL}/admin/get-video/${id}`)
    }
    
}