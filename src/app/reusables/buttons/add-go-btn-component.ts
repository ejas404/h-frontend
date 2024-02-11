import { Component, Input } from "@angular/core";

@Component({
    selector : 'addto-goto-cart-btn',
    template : ` <button [routerLink]="rLink" 
                class="font-bold  p-1 px-2 rounded text-white {{calledFor === 'goto'? '!bg-indigo-600' : '!bg-primary'}} {{styleClass}}">{{calledFor === 'goto'? 'Go to cart' : 'Add to cart' }}</button>`
})

export class CartBtnComponent{
    @Input() rLink !: string;
    @Input() styleClass !: string;
    @Input() calledFor !: string;

}