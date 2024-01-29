import { Component, Input } from "@angular/core";

@Component({
    selector : 'common-btn-reusable',
    template : ` <button [type]="btnType" [routerLink]="rLink" class="font-bold  p-1 px-2 rounded {{styleClass}}"> <ng-content></ng-content> </button>`
})

export class CommonBtnReusableComponent{
    @Input() styleClass !: string;
    @Input() rLink !: string
    @Input() btnType !: string

}