import { Component, Input } from '@angular/core';

@Component({
  selector: 'cart-btn',
  template:`<ng-icon [className]="styleClass" name="bootstrapCart3" ></ng-icon>`
})
export class CartBtnReusableComponent {
    @Input()styleClass !: string;
}


