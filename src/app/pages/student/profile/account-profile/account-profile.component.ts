import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PasswordUpdate } from '../../../../core/models/student';
import { StudentProfileService } from '../../../../core/services/student/profile';
import { SuccessMessage } from '../../../../core/models/server_response_model';
import { Subject, takeUntil } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrl: './account-profile.component.scss'
})
export class AccountProfileComponent {

  private destroy$ = new Subject<void>();

  constructor(
    private service: StudentProfileService,
    private messageService : MessageService
    ) {}

  resetPassword(data: NgForm) {
    console.log(data.value)
    const toUpdate: PasswordUpdate = {
      currentPassword: data.value.currentPassword,
      newPassword: data.value.newPassword
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

  logout() {
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
