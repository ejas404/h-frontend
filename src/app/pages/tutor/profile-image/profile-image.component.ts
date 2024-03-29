import { Component, OnInit } from '@angular/core';
import { TutorModel } from '../../../core/models/tutor';
import { Store } from '@ngrx/store';
import { getTutorStoreData } from '../../../core/state/tutor/profile/reducer';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'tutor-profile-image',
  templateUrl: './profile-image.component.html'
})
export class TutorProfileImageComponent implements OnInit {

  private destroy$ = new Subject<void>();

  tutorData$ !: TutorModel;
  profileUrl$ !: string;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {

    // the user data will be fetched from the server store
    this.store.select(getTutorStoreData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.tutorData$ = data as TutorModel
        }
      })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
