import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PasswordUpdate } from '../../../core/models/student';
import { TutorProfileService } from '../../../core/services/tutor/profile';
import { Subject, takeUntil } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tutor-account',
  templateUrl: './tutor-account.component.html',
  styleUrl: './tutor-account.component.scss'
})
export class TutorAccountComponent {

  private destroy$ = new Subject<void>();

  constructor(
    private service : TutorProfileService,
    private messageService : MessageService
    ){}
 
  resetPassword(data : NgForm){
    let toUpdate : PasswordUpdate = {
      currentPassword : data.value.currentPassword,
      newPassword : data.value.newPassword
    }

    this.service.resetPassword(toUpdate)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next :  (res) => {
        this.serverUploadSuccess()

      },
      error : err =>{
        this.serverUploadFail(err.error.message)
      }
    })

  }

  logOut(){
    this.service.logout()
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

  serverUploadSuccess(){
    this.messageService.add({
      severity : 'success',
      summary : 'Success',
      detail : 'Password changed successfully'
    })
  }

  serverUploadFail(msg : string){
    this.messageService.add({
      severity : 'error',
      summary : 'Failed',
      detail : msg || 'failed to update password'
    })
  }


}
