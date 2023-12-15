import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()value !: string;
  @Input()type !: string;
  @Input()class !: string;
}
