import { Component, OnInit } from '@angular/core';
import { TutorModel } from '../../../core/models/tutor';
import { Store } from '@ngrx/store';
import { BASE_URL } from '../../../core/constant/uri';
import { getTutorData } from '../../../core/state/tutor/profile/action';
import { getTutorStoreData } from '../../../core/state/tutor/profile/reducer';

@Component({
  selector: 'tutor-profile-image',
  templateUrl: './profile-image.component.html'
})
export class TutorProfileImageComponent implements OnInit{
  tutorData$ !: TutorModel;
  profileUrl$ !: string;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {

    // the user data will be fetched from the server store
    this.store.select(getTutorStoreData).subscribe((data) => {

      this.tutorData$ = data as TutorModel
      if (this.tutorData$?.profile) {
        console.log(this.tutorData$.profile , 'tutor profile data')
        this.profileUrl$ = `${BASE_URL}/${this.tutorData$.profile?.slice(7)}`
      }else{
        this.profileUrl$ =  '../../../../../assets/student/fixed-images/634682.png'
      }


    })
  }

}
