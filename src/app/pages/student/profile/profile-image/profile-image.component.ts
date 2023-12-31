import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../core/models/auth';
import { BASE_URL } from '../../../../core/constant/uri';
import { Store } from '@ngrx/store';
import { getUserData } from '../../../../core/state/student/profile_page/action';
import { getStudData } from '../../../../core/state/student/profile_page/reducer';

@Component({
  selector: 'student-profile-image',
  templateUrl: './profile-image.component.html',
})
export class ProfileImageComponent implements OnInit {
  userData$ !: UserModel;
  profileUrl$ !: string;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {

    // the user data will be fetched from the server store
    this.store.select(getStudData).subscribe((data) => {

      this.userData$ = data as UserModel
      if (this.userData$?.profile) {
        this.profileUrl$ = `${BASE_URL}/${this.userData$.profile?.slice(7)}`
      }else{
        this.profileUrl$ =  '../../../../../assets/student/fixed-images/634682.png'
      }


    })
  }

}
