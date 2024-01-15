import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DashboardService } from 'app/core/services/admin/dashboard';
import { ToastService } from 'app/core/services/shared/toast_service';
import { Subject, take, takeUntil } from 'rxjs';
import { SectionPopupComponent } from '../course-popups/section-popup/section-popup.component';

@Component({
  selector: 'app-video-upload-popup',
  templateUrl: './video-upload-popup.component.html',
  styleUrl: './video-upload-popup.component.scss'
})
export class VideoUploadPopupComponent {

  destroy$  = new Subject<void>

  constructor(
    private toast : ToastService,
    private dashboardService : DashboardService,
    private dialogRef : MatDialog,
    @Inject(MAT_DIALOG_DATA) public data : {course_id : string}
    ){}

  url !: ArrayBuffer | string | null;
  isVideo !: boolean;
  file !: File

  onAddedEvent(event : Event){
    const input = event.target as HTMLInputElement
    this.isVideo = false

    if(!input.files?.length) return ;

    const reader = new FileReader
    const file = input.files[0]
    this.file = file

    if(file.size > 20000000) {
      this.toast.fail('maximum 20 mb is allowed','max size limited')
      return
    }

    reader.readAsDataURL(file)

    if(file.type.indexOf('video') <= -1) return;

    this.isVideo = true

    reader.onload = e =>{
      this.url = (<FileReader>e.target).result
    }

  }

  onFormSubmit(form : NgForm){
    console.log('form submited')
    console.log(form.value)

    if(!this.file) return;
    console.log('after file')

    const formData = new FormData()

    formData.append('file', this.file)

    this.dashboardService.uploadVideo(formData)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : data =>{
        this.toast.success('video uploaded successfully')
      },
      error : err => {
        this.toast.fail('failed to upload video')
      }
    })

  }

  onAddSection(){
    this.dialogRef.open(SectionPopupComponent,{
      data : {
        course_id : this.data.course_id
      }
    })
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

}

