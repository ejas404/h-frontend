import { Component, Input } from '@angular/core';

@Component({
  selector: 'next-prev-btn',
  template:`<ng-icon class="text-3xl cursor-pointer {{styleClass}}" name="bootstrapCaretRightFill" ></ng-icon>`
})
export class NextPrevBtnComponent {
    @Input()styleClass !: string;
}


