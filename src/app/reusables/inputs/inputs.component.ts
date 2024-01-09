import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-input',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  @Input()type !: string ;
  @Input()placeholder !: string ;
  @Input()style !: string;
  @Input()name !: string;
  @Input() required !: boolean;
  // @Input() control : any;
}
