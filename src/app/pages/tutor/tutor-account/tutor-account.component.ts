import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PasswordUpdate } from '../../../core/models/student';
import { TutorProfileService } from '../../../core/services/tutor/profile';

@Component({
  selector: 'app-tutor-account',
  templateUrl: './tutor-account.component.html',
  styleUrl: './tutor-account.component.scss'
})
export class TutorAccountComponent {

  constructor(private service : TutorProfileService){}
 
  resetPassword(data : NgForm){
    console.log(data.value)
    let toUpdate : PasswordUpdate = {
      currentPassword : data.value.currentPassword,
      newPassword : data.value.newPassword
    }

    this.service.resetPassword(toUpdate).subscribe((res  : any)=>{
      alert(res.message)
    })

  }

  logOut(){
    this.service.logout()
  }
}
