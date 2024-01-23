import { Component, Inject } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DashboardService } from '../../../../core/services/admin/dashboard';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { courseCoverUpdateSuccess } from '../../../../core/state/admin/courses/action';
import { Subject, takeUntil } from 'rxjs';
import { ImageCropperService } from 'app/core/services/shared/image_crop_service';
import { ToastService } from 'app/core/services/shared/toast_service';

@Component({
  selector: 'app-course-image-popup',
  templateUrl: './course-image-popup.component.html',
  styleUrl: './course-image-popup.component.scss'
})
export class CourseImagePopupComponent {

  private destroy$ = new Subject<void>();

  constructor(
    private service: DashboardService,
    private store: Store,
    private croppedRespone : ImageCropperService,
    private toastService : ToastService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string , calledFor : string , imageInput : Event}
  ) { }

  inputEvent !: Event;
  cropResponse !: ImageCroppedEvent;
  name !: string;
  cropPreview: any;
  button: boolean = false

  ngOnInit(){
    if(this.data.calledFor === 'addCourse'){
      this.inputUpload(this.data.imageInput)
    }
  }


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
    this.toastService.fail('failed to load image')
  }


  uploadImage() {
    let blob: any = this.cropResponse.blob

    let file = new File([blob], `${this.name}-${Date.now()}.jpg`, { type: blob.type })

    if(this.data.calledFor === 'addCourse'){
      this.croppedRespone.setCropped(file)
      return
    }

    let uploadForm = new FormData()
    uploadForm.append('cover', file, file.name)

    this.service.updateCourseCover(uploadForm, this.data.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.toastService.success('Cover Image updated successfully')
          this.store.dispatch(courseCoverUpdateSuccess(data))
        },
        error: err => {
          this.toastService.fail('Cover Image Failed to Update')
        }
      })
  }


  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
