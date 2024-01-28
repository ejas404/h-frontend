import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'checkout-box',
  templateUrl: './checkout-box.component.html',
  styleUrl: './checkout-box.component.scss'
})
export class CheckoutBoxComponent {
 @Input() subTotal !: number ;
 @Input() checkOutDisable !: boolean;
 @Input() cartCheckout !: string;
 @Input() btnTitle !: string;

 @Output() clickedEvent = new EventEmitter()

 buttonClicked(){
  if(this.cartCheckout) return;
  this.clickedEvent.emit()
 }

}
