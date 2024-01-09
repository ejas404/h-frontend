import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateEducationDetails } from '../../core/state/tutor/profile/action';

@Component({
  selector: 'app-tutor-popup',
  templateUrl: './tutor-popup.component.html',
  styleUrl: './tutor-popup.component.scss'
})
export class TutorPopupComponent {

  constructor( private store : Store){}

  onFormSubmit(form : NgForm){
    let educationDetails = form.value
    this.store.dispatch(updateEducationDetails({educationDetails}))
  }
}
