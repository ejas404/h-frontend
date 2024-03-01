import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../core/models/auth';
import { Store } from '@ngrx/store';
import { getUserData } from '../../../../core/state/student/profile_page/action';
import { getStudData } from '../../../../core/state/student/profile_page/reducer';
import { MatDialog } from '@angular/material/dialog';
import { ProfileImagePopupComponent } from '../../../../shared/popups/profile-image-popup/popup.component';
import { Subject, takeUntil } from 'rxjs';
import { MessageTextService } from 'app/core/services/message_service';
import { ToastService } from 'app/core/services/shared/toast_service';
import { FirebaseConfigService } from 'app/core/services/shared/firebase_config_srevice';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html'
})
export class MainProfileComponent implements OnInit {

  private destroy$ = new Subject<void>();

  name: string = ''
  userData !: UserModel;

  constructor(
    private store: Store,
    private dialogRef: MatDialog,
    private messageService : MessageTextService,
    private toast : ToastService,
    private fcmConfig : FirebaseConfigService
  ) { }

  ngOnInit(): void {
    // emit action to navbar
    this.fcmConfig.setAction(true)

    // establish connection on socket
    this.listenToMessages()
   
    //the user data fetch action will be dispatched
    this.store.dispatch(getUserData())

     // the user data will be fetched from the server store
    this.store.select(getStudData)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : data => {
      
        this.userData = data as UserModel
        this.name = this.userData?.name || ''
  
      }
    })
  }

  openDialog() {
    this.dialogRef.open(ProfileImagePopupComponent,{
      data : {calledFor : 'student'}
    })
  }

  listenToMessages(){
    this.messageService.recieve()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        this.toast.success('you have a text message')
      }
    })
  }


  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }


}



