import { Component, Inject } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DashboardService } from '../../../core/services/admin/dashboard';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { courseCoverUpdateSuccess } from '../../../core/state/admin/courses/action';

@Component({
  selector: 'app-course-image-popup',
  templateUrl: './course-image-popup.component.html',
  styleUrl: './course-image-popup.component.scss'
})
export class CourseImagePopupComponent {
  constructor(
    private service: DashboardService,
    private messageService: MessageService,
    private store : Store,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
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
    uploadForm.append('cover', file, file.name)

    this.service.updateCourseCover(uploadForm, this.data.id).subscribe({
      next : data =>{
        this.serverUploadSuccess()
        this.store.dispatch(courseCoverUpdateSuccess(data))
      },
      error : err =>{
        this.serverUploadFail()
      }
    })
  }

  serverUploadSuccess(){
    this.messageService.add({
      severity : 'success',
      summary : 'Success',
      detail : 'Cover Image updated successfully'
    })
  }

  serverUploadFail(){
    this.messageService.add({
      severity : 'error',
      summary : 'Failed',
      detail : 'Cover Image Failed to Update'
    })
  }
}
