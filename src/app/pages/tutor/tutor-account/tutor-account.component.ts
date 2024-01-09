import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PasswordUpdate } from '../../../core/models/student';
import { TutorProfileService } from '../../../core/services/tutor/profile';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tutor-account',
  templateUrl: './tutor-account.component.html',
  styleUrl: './tutor-account.component.scss'
})
export class TutorAccountComponent {

  private destroy$ = new Subject<void>();

  constructor(private service : TutorProfileService){}
 
  resetPassword(data : NgForm){
    console.log(data.value)
    let toUpdate : PasswordUpdate = {
      currentPassword : data.value.currentPassword,
      newPassword : data.value.newPassword
    }

    this.service.resetPassword(toUpdate)
    .pipe(takeUntil(this.destroy$))
    .subscribe((res  : any)=>{
      alert(res.message)
    })

  }

  logOut(){
    this.service.logout()
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

}
