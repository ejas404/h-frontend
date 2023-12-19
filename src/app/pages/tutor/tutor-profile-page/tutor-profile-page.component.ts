import { Component } from '@angular/core';
import { getTutorData } from '../../../core/state/tutor/profile/action';
import { Store } from '@ngrx/store';
import { UserModel } from '../../../core/models/auth';
import { getTutorStoreData } from '../../../core/state/tutor/profile/reducer';

@Component({
  selector: 'app-tutor-profile-page',
  templateUrl: './tutor-profile-page.component.html',
  styleUrl: './tutor-profile-page.component.scss'
})
export class TutorProfilePageComponent {
  tutorData$ !: UserModel ;

  constructor(private store : Store){}

  ngOnInit(): void {
    this.store.dispatch(getTutorData())

    this.store.select(getTutorStoreData).subscribe((data)=>{
      this.tutorData$ = data as unknown as UserModel
    })
  }
}
