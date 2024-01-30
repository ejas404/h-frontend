import { Component, Input } from '@angular/core';

@Component({
  selector: 'success-fail-template',
  templateUrl: './success-fail-template.component.html',
  styleUrl: './success-fail-template.component.scss'
})
export class SuccessFailTemplateComponent {
  @Input()success !: boolean;
}
