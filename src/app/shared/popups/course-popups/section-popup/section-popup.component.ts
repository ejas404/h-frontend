import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-section-popup',
  templateUrl: './section-popup.component.html',
  styleUrl: './section-popup.component.scss'
})
export class SectionPopupComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : {course_id : string}
  ){

  }

  onFormSubmit(form : NgForm){
    console.log('add sectoin form printed')
    console.log(form.value)
  }
}
