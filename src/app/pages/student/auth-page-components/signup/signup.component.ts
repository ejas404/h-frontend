import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { studentSignup } from '../../../../core/state/auth/action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private store : Store){}
  onSubmitClick(form : NgForm){

    const studentData = form.value
    this.store.dispatch(studentSignup({studentData}))
  }
}
