import { Component, Input } from "@angular/core";

@Component({
    selector : 'auth-form-btn',
    template : `<button type="submit" [disabled]="isDisable"
    class="{{bg}} font-bold {{text}} w-full border border-light-gray py-1 rounded my-2">{{value}}</button>`
})
export class AuthFormButtonComponent{
    @Input()bg !: string;
    @Input()text !: string;
    @Input()value !: string;
    @Input()isDisable !: boolean;

}