import { Component, Input } from '@angular/core';

@Component({
  selector: 'quantity-counter',
  templateUrl: './quantity-counter.component.html',
  styleUrl: './quantity-counter.component.scss'
})
export class QuantityCounterComponent {

  @Input()count !: number; 

  increment(){
    this.count++
  }
  
  decrement(){
    if(this.count === 1) return;
    this.count--
  }
}
