import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-add-btn',
  template:`<button type="button" class="bg-admin-primary text-white text-sm w-{{size}} h-{{size}} font-bold rounded-full">+</button>`
})
export class AdminAddBtnReusableComponent {
  @Input()size !: any
}


