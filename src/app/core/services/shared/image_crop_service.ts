import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class ImageCropperService{
    private isCroppedSubject = new Subject<any>()
    public isCropped = this.isCroppedSubject.asObservable()

    constructor(){}

    public setCropped(value : any){
        this.isCroppedSubject.next(value)
    }
}