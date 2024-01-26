import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class ComponetCommunicationService{
    private action = new Subject<any>()
    public isDone = this.action.asObservable()

    setAction(data : any){
        this.action.next(data)
    }
}