import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class MessagTextService{
    constructor(
        private socket : Socket
    ){}

    send(text : string){
        this.socket.emit('msg', text)
    }

    recieve(): Observable<string>{
       return this.socket.fromEvent('reply')
    }
}