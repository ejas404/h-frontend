import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../core/models/auth';
import { Store } from '@ngrx/store';
import { getUserData } from '../../../../core/state/student/profile_page/action';
import { getStudData } from '../../../../core/state/student/profile_page/reducer';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../../../shared/popup/popup.component';
import { BASE_URL } from '../../../../core/constant/uri';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html'
})
export class MainProfileComponent implements OnInit {

  name: string = ''
  userData$ !: UserModel;
  profileUrl !: string;

  constructor(
    private store: Store,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
   
    //the user data fetch action will be dispatched
    this.store.dispatch(getUserData())

     // the user data will be fetched from the server store
    this.store.select(getStudData).subscribe((data) => {
      
      this.userData$ = data as UserModel
      this.name = this.userData$?.name || ''
      if (this.userData$?.profile) {
        this.profileUrl = `${BASE_URL}/${this.userData$.profile?.slice(7)}`
      }else{
        this.profileUrl =  '../../../../../assets/student/fixed-images/634682.png'
      }
    })
  }

  openDialog() {
    this.dialogRef.open(PopupComponent,{
      data : {calledFor : 'student'}
    })
  }
}



