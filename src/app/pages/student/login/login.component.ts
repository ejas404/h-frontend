import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { studentLoginReq } from '../../../core/state/auth/action';
import { MatDialog } from '@angular/material/dialog';
import { LoginOtpComponent } from '../login-otp/login-otp.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
              private store : Store,
              private dialogRef : MatDialog
              ){}

  onSubmitClick(form : NgForm){

    let credentials = form.value

    this.store.dispatch(studentLoginReq({credentials}))
  }

  loginWithOtp(){
    this.dialogRef.open(LoginOtpComponent)
  }

}
