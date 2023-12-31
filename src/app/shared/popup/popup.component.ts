import { Component, Inject } from '@angular/core';
import { ImageCroppedEvent} from 'ngx-image-cropper';
import { StudentProfileService } from '../../core/services/student/profile';
import { MessageService } from 'primeng/api';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TutorProfileService } from '../../core/services/tutor/profile';
import { Store } from '@ngrx/store';
import { profilePicUpdateSuccess } from '../../core/state/tutor/profile/action';
import { studentPicUpdateSuccess } from '../../core/state/student/profile_page/action';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  constructor(
    private studService: StudentProfileService,
    private tutorService: TutorProfileService,
    private messageService: MessageService,
    private store : Store,
    @Inject(MAT_DIALOG_DATA) public data: { calledFor: string }
  ) { }

  inputEvent !: Event;
  cropResponse !: ImageCroppedEvent;
  name !: string;
  cropPreview: any;
  button: boolean = false


  inputUpload(event: any) {
    this.inputEvent = event

    let input = event.target
    this.name = input.files[0].name
  }

  imageCropped(e: ImageCroppedEvent) {
    this.button = false
    this.cropResponse = e
    this.cropPreview = e.objectUrl
  }

  loadImageFailed() {
    this.button = true
    this.messageService.add({
      severity: 'error',
      summary: 'Load Fail',
      detail: 'Image failed to load'
    })
  }


  uploadImage() {
    let blob: any = this.cropResponse.blob

    let file = new File([blob], `${this.name}-${Date.now()}.jpg`, { type: blob.type })

    let uploadForm = new FormData()
    uploadForm.append('profile', file, file.name)

    if (this.data.calledFor === 'student') {
      this.studService.updateProfilePic(uploadForm).subscribe(
        (data) => {
          this.serverUploadSuccess()
          this.store.dispatch(studentPicUpdateSuccess(data))
        },
        (err)=>{
          this.serverUploadFail()
        }
        )
    } else if (this.data.calledFor === 'tutor') {
      this.tutorService.updateProfilePic(uploadForm).subscribe(
        (data) => {
          this.serverUploadSuccess()
          this.store.dispatch(profilePicUpdateSuccess(data))
        },
        (err)=>{
          this.serverUploadFail()
        }
       )
    }

  }

  serverUploadSuccess(){
    this.messageService.add({
      severity : 'success',
      summary : 'Success',
      detail : 'Profile Image updated successfully'
    })
  }

  serverUploadFail(){
    this.messageService.add({
      severity : 'error',
      summary : 'Failed',
      detail : 'Profile Image Failed to Update'
    })
  }


}
