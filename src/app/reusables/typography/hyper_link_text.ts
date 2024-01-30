import { Component, Input } from '@angular/core';

@Component({
  selector: 'hyper-link-text',
  template:`<span class="{{size}} {{setHyper?'hover:text-blue-700 hover:underline cursor-pointer':''}} "><ng-content></ng-content> </span>`
})
export class HyperLinkTextComponent {
  @Input()size !: any
  @Input()setHyper !: boolean;
}


