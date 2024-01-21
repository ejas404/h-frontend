import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'reusable-login-template',
  templateUrl: './login-reusable-temp.component.html',
  styleUrl: './login-reusable-temp.component.scss'
})
export class LoginReusableTempComponent {
  bg : string = ''

  @Input()usedFor !: string
  @Output()submitEvent = new EventEmitter()
  @Output()googleSignUp = new EventEmitter()
  @Output()otp = new EventEmitter()

  ngOnInit(){
    if(this.usedFor === 'student'){
      this.bg = 'bg-primary'
    }
    
    if(this.usedFor === 'tutor'){
      this.bg = 'bg-tutor-primary'
    }

    if(this.usedFor === 'admin'){
      this.bg = 'bg-admin-primary'
    }

  }

  onSubmitClick(form : NgForm){
    this.submitEvent.emit(form)
  }

  googleSign(){
    this.googleSignUp.emit(null)
  }

  otpLogin(){
    this.otp.emit(null)
  }
}
