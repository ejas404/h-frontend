import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { tutorLoginReq } from '../../../core/state/auth/action';

@Component({
  selector: 'app-tutor-login',
  templateUrl: './tutor-login.component.html',
  styleUrl: './tutor-login.component.scss'
})
export class TutorLoginComponent {
  constructor(private store: Store) { }

  onSubmitClick(form: NgForm) {

    let credentials = form.value

    this.store.dispatch(tutorLoginReq({ credentials }))
  }
}
