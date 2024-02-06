import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { Socket, io } from "socket.io-client";
import { BASE_URL } from "../constant/uri";
import { MessageModel } from "../models/chat_model";

@Injectable({
    providedIn : 'root'
})
export class MessageTextService{
    private socket : Socket;
    constructor(
        private http : HttpClient
    ){
        this.socket = io(environment.socketUrl)
    }

    send(data : {message : string, receiver : string}){
        this.socket.emit('msg', data)
    }

    recieve(): Observable<MessageModel>{
       return new Observable(subscriber =>{
        this.socket.on('reply',(data)=>{
            subscriber.next(data)
        })
       })
    }

    getOldMessages(reciever : string,route : string){
        return this.http.get< MessageModel[]>(`${BASE_URL}/${route}/get-messages/${reciever}`)
    }
}