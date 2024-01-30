import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "app/core/constant/uri";
import { ConnectionsResponse } from "app/core/models/server_response_model";


@Injectable()
export class StudentConnectionService{
    constructor(
        private http : HttpClient
    ){}

    getConnections(){
        return this.http.get<{connections : ConnectionsResponse[]}>(`${BASE_URL}/student/connections`)
    }
}