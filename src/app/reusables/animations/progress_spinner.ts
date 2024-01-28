import { Component } from "@angular/core";
import { ProgressSpinnerService } from "app/core/services/shared/progress_spinner_service";

@Component({
    selector : 'progress-spinner-reusable',
    template : `<p-progressSpinner *ngIf="start" class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"  aria-label="Loading" strokeWidth="3" [style]="{stroke : '#0000'}" ></p-progressSpinner>`
})
export class ProgressSpinnerReusableComponent{
    start = false;

    constructor(
        private spinnerService : ProgressSpinnerService
    ){}

    ngOnInit(){
        console.log('initializeddd')
        this.spinnerService.isStarted.subscribe({
            next : res => {
                console.log('onchage called',res)
                this.start = res as boolean
            }
        })
    }
}