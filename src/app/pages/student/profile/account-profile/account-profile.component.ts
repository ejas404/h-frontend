import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PasswordUpdate } from '../../../../core/models/student';
import { StudentProfileService } from '../../../../core/services/student/profile';
import { Subject, takeUntil } from 'rxjs';
import { FirebaseConfigService } from 'app/core/services/shared/firebase_config_srevice';
import { MessageTextService } from 'app/core/services/message_service';
import { ToastService } from 'app/core/services/shared/toast_service';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrl: './account-profile.component.scss'
})
export class AccountProfileComponent {


  private destroy$ = new Subject<void>();

  constructor(
    private service: StudentProfileService,
    private fcmConfig : FirebaseConfigService,
    private msgService : MessageTextService,
    private toastService : ToastService
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
       this.toastService.success('Password changed successfully')
      },
      error : err =>{
        this.toastService.fail(err.error.message || 'failed to update password')
      }
    })

  }

  twoFactorAuth(e : boolean) {

  }

  logout() {
    this.fcmConfig.setAction(false)
    this.msgService.disconnect()
    this.service.logout()
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

}
