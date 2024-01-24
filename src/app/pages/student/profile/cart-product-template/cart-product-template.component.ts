import { Component, Input } from '@angular/core';
import { CartModel } from 'app/core/models/cart_model';

@Component({
  selector: 'cart-product-template',
  templateUrl: './cart-product-template.component.html',
  styleUrl: './cart-product-template.component.scss'
})
export class CartProductTemplateComponent {
  @Input()cartProducts !: CartModel[]
}
