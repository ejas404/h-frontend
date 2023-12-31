import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { studentLoginReq } from '../../../core/state/auth/action';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
              private store : Store 
              ){}

  onSubmitClick(form : NgForm){

    let credentials = form.value

    this.store.dispatch(studentLoginReq({credentials}))
  }

}
