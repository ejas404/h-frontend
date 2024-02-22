import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConnectionsResponse } from "app/core/models/server_response_model";
import { environment } from "environments/environment";

const BASE_URL = environment.BASE_URL

@Injectable()
export class StudentConnectionService{
    constructor(
        private http : HttpClient
    ){}

    getConnections(){
        return this.http.get<{connections : ConnectionsResponse[]}>(`${BASE_URL}/student/connections`)
    }
}