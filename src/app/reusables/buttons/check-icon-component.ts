import { Component, Input } from '@angular/core';

@Component({
  selector: 'check-icon',
  template:`<ng-icon [className]="styleClass" name="bootstrapCheckCircleFill" ></ng-icon>`
})
export class CheckIconReusableComponent {
    @Input()styleClass !: string;
}


