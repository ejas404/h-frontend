import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PasswordUpdate } from '../../../../core/models/student';
import { StudentProfileService } from '../../../../core/services/student/profile';
import { SuccessMessage } from '../../../../core/models/server_response_model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrl: './account-profile.component.scss'
})
export class AccountProfileComponent {

  private destroy$ = new Subject<void>();

  constructor(
    private service: StudentProfileService
    ) {}

  resetPassword(data: NgForm) {
    console.log(data.value)
    let toUpdate: PasswordUpdate = {
      currentPassword: data.value.currentPassword,
      newPassword: data.value.newPassword
    }

    this.service.resetPassword(toUpdate)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next :  (res) => {
        const response =  res as SuccessMessage
        alert(response.message)

      },
      error : err =>{
        alert(err.message)
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


}
