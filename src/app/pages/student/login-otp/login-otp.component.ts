import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentProfileService } from '../../../core/services/student/profile';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrl: './login-otp.component.scss'
})
export class LoginOtpComponent {

  private destroy$ = new Subject<void>();

  emailEntered: boolean = false
  userEmail !: string;
  otpEmail !: string;

  constructor(
    private service: StudentProfileService,
    private messageService: MessageService) { }

  emailAdded(email: string) {
    this.userEmail = email
    this.service.getOtp(email)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: data => {
        this.emailEntered = true
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Otp has send to the user email'
        })
      },
      error: err => {
        this.messageService.add({
          severity: 'error',
          summary: 'failed',
          detail: 'failed to generate otp'
        })
      }
    })
  }

  otpEntered(otp: string) {
    let reqBody = {
      email: this.userEmail,
      otp
    }

    this.service.submitOtp(reqBody)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: data => {
        this.emailEntered = true
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Otp has send to the user email'
        })
      },
      error: err => {
        this.messageService.add({
          severity: 'error',
          summary: 'failed',
          detail: 'failed to generate otp'
        })
      }
    })
  }

  
  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }


}
