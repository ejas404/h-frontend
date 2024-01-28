import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class ProgressSpinnerService{
    private spinnerObject = new BehaviorSubject<boolean>(false)
    public isStarted = this.spinnerObject.asObservable()

    public startSpinner(val : boolean){
        this.spinnerObject.next(val)
    }
}