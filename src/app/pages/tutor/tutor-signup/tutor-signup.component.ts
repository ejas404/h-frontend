import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tutorSignup } from '../../../core/state/auth/action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tutor-signup',
  templateUrl: './tutor-signup.component.html',
  styleUrl: './tutor-signup.component.scss'
})
export class TutorSignupComponent {
  constructor(private store : Store){}
  onSubmitClick(form : NgForm){

    const tutorData : any = form.value
    this.store.dispatch(tutorSignup({tutorData}))
  }
}
