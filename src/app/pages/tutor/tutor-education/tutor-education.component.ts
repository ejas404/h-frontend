import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TutorEducation } from 'app/core/models/tutor';
import { TutorProfileService } from 'app/core/services/tutor/profile';
import { tutorEducationDeleteSuccess } from 'app/core/state/tutor/profile/action';
import { getTutorStoreData } from 'app/core/state/tutor/profile/reducer';
import { ConfirmBoxHelper } from 'app/core/utils/confirm_box-helper';
import { TutorPopupComponent } from 'app/shared/popups/tutor-popup/tutor-popup.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tutor-education',
  templateUrl: './tutor-education.component.html',
  styleUrl: './tutor-education.component.scss',
  providers : [TutorProfileService]
})
export class TutorEducationComponent {

  private destroy$ = new Subject<void>();
  educationDetails !: TutorEducation[];

  constructor(
    private service: TutorProfileService,
    private dialogRef: MatDialog,
    private confirmBox: ConfirmBoxHelper,
    private store: Store
  ) { }

  ngOnInit(){
    this.store.select(getTutorStoreData)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: data => {
        this.educationDetails = data.education as TutorEducation[]
      }
    })
  }

  addEducation() {
    this.dialogRef.open(TutorPopupComponent)
  }

  async deleteEduEvent(id: string) {
    const check = await this.confirmBox.call('Are your sure about deleting the education details')
    if (!check) return;
    this.deleteEducation(id)

  }

  deleteEducation(id: string) {
    this.service.deleteEducation(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.store.dispatch(tutorEducationDeleteSuccess({ successResponse: { toDelete: data.toDelete } }))
        },
        error: err => {
          console.log(err)
        }
      })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
