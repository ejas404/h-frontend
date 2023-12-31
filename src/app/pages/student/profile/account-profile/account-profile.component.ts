import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PasswordUpdate } from '../../../../core/models/student';
import { StudentProfileService } from '../../../../core/services/student/profile';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrl: './account-profile.component.scss'
})
export class AccountProfileComponent {

  constructor(private service: StudentProfileService) {

  }

  resetPassword(data: NgForm) {
    console.log(data.value)
    let toUpdate: PasswordUpdate = {
      currentPassword: data.value.currentPassword,
      newPassword: data.value.newPassword
    }

    this.service.resetPassword(toUpdate).subscribe(
      (res: any) => {
        alert(res.message)

      },
      (err : any)=>{
        alert(err.message)
      }
    )

  }

  logout() {
    this.service.logout()
  }
}
