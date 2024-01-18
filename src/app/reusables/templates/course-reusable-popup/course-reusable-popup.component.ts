import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'course-reusable-popup',
  templateUrl: './course-reusable-popup.component.html',
  styleUrl: './course-reusable-popup.component.scss'
})
export class CourseReusablePopupComponent {
  @Input()id : string = '' 

  @Output() submit = new EventEmitter()

  onFormSubmit(form : NgForm, event : Event){
    event.stopPropagation()
    this.submit.emit(form)
  }
}
