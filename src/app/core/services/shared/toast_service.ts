import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({providedIn : 'root'})
export class ToastService{
    constructor(private messageService : MessageService ){}

    success(msg : string, sum : string = 'Success'){
        this.messageService.add({
            severity : 'success',
            summary : sum,
            detail : msg
        })
    }

    fail(msg : string, sum : string = 'Failed'){
        this.messageService.add({
            severity : 'error',
            summary : sum,
            detail : msg
        })
    }
}