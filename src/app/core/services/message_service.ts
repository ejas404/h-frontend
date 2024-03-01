import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { Socket, io } from "socket.io-client";
import { MessageModel } from "../models/chat_model";

const BASE_URL = environment.BASE_URL

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

    send(data : {message : string, receiver : string},event : string){
        this.socket.emit(event, data)
    }

    recieve(): Observable<MessageModel>{
       return new Observable(subscriber =>{
        this.socket.on('reply',(data)=>{
            subscriber.next(data)
        })
       })
    }

    disconnect(){
        this.socket.disconnect()
    }

    getOldMessages(reciever : string,route : string){
        return this.http.get< MessageModel[]>(`${BASE_URL}/${route}/get-messages/${reciever}`)
    }

    sendImage(form : FormData,route : string){
        return this.http.post<{success : string,newChat : MessageModel}>(`${BASE_URL}/${route}/send-image`,form)
    }
}