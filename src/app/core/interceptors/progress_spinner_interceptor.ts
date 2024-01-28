import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, finalize } from "rxjs";
import { ProgressSpinnerService } from "../services/shared/progress_spinner_service";
import { Injectable } from "@angular/core";

@Injectable()
export class ProgressSpinnerInterceptor implements HttpInterceptor{

    constructor(
        private spinnerService : ProgressSpinnerService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.startSpinner(true)

        return next.handle(req).pipe(
            finalize(()=>{
                this.spinnerService.startSpinner(false)
            })
        )
    }
}