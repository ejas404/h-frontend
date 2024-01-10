import { Component, OnInit } from '@angular/core';
import { TutorPopupComponent } from '../../../shared/popups/tutor-popup/tutor-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {  tutorEducationDeleteSuccess } from '../../../core/state/tutor/profile/action';
import { getTutorStoreData } from '../../../core/state/tutor/profile/reducer';
import { TutorEducation } from '../../../core/models/tutor';
import { TutorProfileService } from '../../../core/services/tutor/profile';
import { MessageService } from 'primeng/api';
import { ConfirmBoxService } from '../../../core/services/shared/confirm-dialog';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrl: './tutor-profile.component.scss'
})
export class TutorProfileComponent implements OnInit {

  private destroy$ = new Subject<void>();

  educationDetails !: TutorEducation[];

  constructor(
    private dialogRef: MatDialog,
    private store: Store,
    private service: TutorProfileService,
    private messageService: MessageService,
    private confirmService : ConfirmBoxService
  ) { }

  ngOnInit(): void {
    this.store.select(getTutorStoreData)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : data => {
        this.educationDetails = data.education as TutorEducation[]
      }
    })
  }

  addEducation() {
    this.dialogRef.open(TutorPopupComponent)
  }

  deleteEducation(id: string) {

    this.confirmService
      .confirmDialog('Are your sure about deleting the education details')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          if (data) {
            this.service.deleteEducation(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: data => {
                this.store.dispatch(tutorEducationDeleteSuccess({ successResponse: { toDelete: data.toDelete } }))

                this.messageService.add({
                  severity: 'success',
                  summary: 'Deleted',
                  detail: 'Education detail deleted success fully'
                })
              },
              error: err => {
                console.log(err)
              }
            })
          }
        }
      })
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

}
