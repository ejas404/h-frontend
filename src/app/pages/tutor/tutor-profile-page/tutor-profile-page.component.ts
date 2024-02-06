import { Component, OnInit } from '@angular/core';
import { getTutorData, tutorEducationDeleteSuccess } from '../../../core/state/tutor/profile/action';
import { Store } from '@ngrx/store';
import { getTutorStoreData } from '../../../core/state/tutor/profile/reducer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TutorProfileService } from '../../../core/services/tutor/profile';
import { StudentUpdateModel } from '../../../core/models/student';
import { titleCase } from 'title-case';
import { TutorEducation, TutorModel } from '../../../core/models/tutor';
import { MatDialog } from '@angular/material/dialog';
import { ProfileImagePopupComponent } from '../../../shared/popups/profile-image-popup/popup.component';
import { TagsPopupTutorComponent } from '../../../shared/popups/tags-popup-tutor/tags-popup-tutor.component';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ToastService } from 'app/core/services/shared/toast_service';
import { TutorPopupComponent } from 'app/shared/popups/tutor-popup/tutor-popup.component';
import { ConfirmBoxHelper } from 'app/core/utils/confirm_box-helper';
import { Socket } from 'ngx-socket-io';
import { MessageTextService } from 'app/core/services/message_service';

@Component({
  selector: 'app-tutor-profile-page',
  templateUrl: './tutor-profile-page.component.html',
  styleUrl: './tutor-profile-page.component.scss',
  providers: [TutorProfileService]
})
export class TutorProfilePageComponent implements OnInit {

  private destroy$ = new Subject<void>();
  educationDetails !: TutorEducation[];


  tutorData !: TutorModel;
  edit: boolean = false;
  constructor(
    private store: Store,
    private service: TutorProfileService,
    private dialogRef: MatDialog,
    private toastService: ToastService,
    private confirmBox: ConfirmBoxHelper,
    private messageService : MessageTextService
  ) { }

  profileUpdate = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'contact': new FormControl('', [Validators.pattern(/^\d{10}$/)])
  })

  ngOnInit(): void {

    // establish connection on socket
    this.listenToMessages()

    this.getData()
  }

  getData() {
    this.store.dispatch(getTutorData())

    this.store.select(getTutorStoreData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.tutorData = data as unknown as TutorModel
          this.setFormValues()
        }
      })

  }



  setFormValues() {

    // converting the name into title case
    let name: string = titleCase(this.tutorData?.name as string)

    this.profileUpdate.patchValue({
      'name': name,
      'email': this.tutorData?.email,
      'contact': this.tutorData?.contact
    });
  }


  onEditClick() {
    this.edit = true
  }

  cancelEdit() {
    this.edit = false
  }

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

  listenToMessages(){
    this.messageService.recieve().subscribe({
      next : res =>{
        this.toastService.success('you have a text message')
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
