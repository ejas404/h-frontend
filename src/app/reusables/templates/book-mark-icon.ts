import { Component, Input } from "@angular/core";

@Component({
    selector : 'book-mark-icon',
    template : `<ng-icon [className]="styleClass" name="bootstrapBookmarkFill"></ng-icon>`
})
export class BookmarkIconReusableComponent{
    @Input() styleClass !: string; 
}