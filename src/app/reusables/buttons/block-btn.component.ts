import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-btn',
  template: ` <ng-icon class="{{text}} text-admin-primary  hover:cursor-pointer"
              name="bootstrapLockFill" title=""></ng-icon>`
})
export class BlockBtnReusableComponent {
  @Input()text !: string;
}
