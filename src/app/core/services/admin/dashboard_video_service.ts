import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VideoWithUrl } from "app/core/models/section_video_model";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

const BASE_URL = environment.BASE_URL

@Injectable()
export class DashboardVideoService{
    constructor(
        private http : HttpClient
    ){}

    uploadVideo(Data: FormData ,route : string): Observable<{ msg: string, path: string }> {
        return this.http.put<{ msg: string, path: string }>(`${BASE_URL}/${route}/add-video`, Data)
    }
    getVideo(id : string,route : string){
        return this.http.get<{video : VideoWithUrl}>(`${BASE_URL}/${route}/get-video/${id}`)
    }
    
}