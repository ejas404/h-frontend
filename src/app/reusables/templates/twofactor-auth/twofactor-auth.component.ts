import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'twofactor-auth',
  templateUrl: './twofactor-auth.component.html',
  styleUrl: './twofactor-auth.component.scss'
})
export class TwofactorAuthComponent {

  @Output()twoFactEnable = new EventEmitter()

  changed(input : HTMLInputElement){
    this.twoFactEnable.emit(input.checked);
  }
}
