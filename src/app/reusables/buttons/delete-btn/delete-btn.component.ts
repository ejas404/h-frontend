import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-btn',
  template: `<ng-icon class="text-admin-primary hover:cursor-pointer {{font_size}}"
             name="bootstrapTrash3Fill"></ng-icon> `
})
export class DeleteBtnReusableComponent {
  @Input() font_size !: string
}

