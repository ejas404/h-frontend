import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../core/models/auth';
import { BASE_URL } from '../../../../core/constant/uri';
import { Store } from '@ngrx/store';
import { getUserData } from '../../../../core/state/student/profile_page/action';
import { getStudData } from '../../../../core/state/student/profile_page/reducer';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'student-profile-image',
  templateUrl: './profile-image.component.html',
})
export class ProfileImageComponent implements OnInit {

  private destroy$ = new Subject<void>();

  userData !: UserModel;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {

    // the user data will be fetched from the server store
    this.store.select(getStudData)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {

      this.userData = data as UserModel

    })
  }

  
  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }


}
