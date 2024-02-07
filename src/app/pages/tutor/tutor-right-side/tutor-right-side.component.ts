import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { StudentUpdateModel } from 'app/core/models/student';
import { TutorEducation, TutorModel } from 'app/core/models/tutor';
import { ToastService } from 'app/core/services/shared/toast_service';
import { TutorProfileService } from 'app/core/services/tutor/profile';
import { tutorEducationDeleteSuccess } from 'app/core/state/tutor/profile/action';
import { getTutorStoreData } from 'app/core/state/tutor/profile/reducer';
import { ConfirmBoxHelper } from 'app/core/utils/confirm_box-helper';
import { ProfileImagePopupComponent } from 'app/shared/popups/profile-image-popup/popup.component';
import { TagsPopupTutorComponent } from 'app/shared/popups/tags-popup-tutor/tags-popup-tutor.component';
import { TutorPopupComponent } from 'app/shared/popups/tutor-popup/tutor-popup.component';
import { Subject, takeUntil } from 'rxjs';
import { titleCase } from 'title-case';

@Component({
  selector: 'tutor-right-side',
  templateUrl: './tutor-right-side.component.html',
  styleUrl: './tutor-right-side.component.scss',
  providers: [TutorProfileService]
})
export class TutorRightSideComponent {

  private destroy$ = new Subject<void>();
  
  @Input()tutorData !: TutorModel
  edit: boolean = false;

  constructor(
    private service: TutorProfileService,
    private dialogRef: MatDialog,
    private toastService: ToastService,
    private confirmBox: ConfirmBoxHelper,
    private store: Store
  ) { }

  ngOnInit() {
      this.store.select(getTutorStoreData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: data => {
            this.tutorData = data as unknown as TutorModel
            this.setFormValues()
          }
        })
  
  }
  
  profileUpdate = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  setFormValues() {
    // converting the name into title case
    let name: string = titleCase(this.tutorData?.name as string)

    this.profileUpdate.patchValue({
      'name': name
    });
  }

  onEditClick() { this.edit = true };

  cancelEdit() { this.edit = false };

  updateUser() {
    this.edit = false
    let userData: StudentUpdateModel = this.profileUpdate.value as StudentUpdateModel
    this.service.updateProfile(userData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.toastService.success('Updated successfully')
        },
        error: err => {
          this.toastService.fail('failed to update')
        }
      })
  }


  editProfImage() {
    this.dialogRef.open(ProfileImagePopupComponent, {
      data: { calledFor: 'tutor' }
    })
  }

  editTag(data: string) {
    this.dialogRef.open(TagsPopupTutorComponent, {
      data: { tagFor: data }
    })
  }



  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
