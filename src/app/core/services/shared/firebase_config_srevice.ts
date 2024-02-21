import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable({
    providedIn : 'root'
})

export class FirebaseConfigService{
    private action = new Subject<any>()
    public isAction = this.action.asObservable()

    setAction(data : boolean){
        this.action.next(data)
    }
}