import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class ComponetCommunicationService{
    private action = new Subject<any>()
    public isDone = this.action.asObservable()

    setAction(data : any,called : string){
        this.action.next({data,called})
    }
}