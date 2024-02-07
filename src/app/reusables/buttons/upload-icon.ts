import { Component, Input } from '@angular/core';

@Component({
  selector: 'upload-icon',
  template:`<ng-icon [className]="styleClass" name="bootstrapUpload" ></ng-icon>`
})
export class UploadIconReusableComponent {
    @Input()styleClass !: string;
}


