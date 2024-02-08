import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastService } from 'app/core/services/shared/toast_service';
import { Subject, takeUntil } from 'rxjs';
import { SectionPopupComponent } from '../course-popups/section-popup/section-popup.component';
import { CourseService } from 'app/core/services/course_service';
import { SectionResponse } from 'app/core/models/section_video_model';
import { ComponetCommunicationService } from 'app/core/services/shared/communicate_service';
import { DashboardVideoService } from 'app/core/services/admin/dashboard_video_service';

@Component({
  selector: 'app-video-upload-popup',
  templateUrl: './video-upload-popup.component.html',
  styleUrl: './video-upload-popup.component.scss',
  providers : [DashboardVideoService]
})
export class VideoUploadPopupComponent {

  destroy$  = new Subject<void>
  url !: ArrayBuffer | string | null;
  isVideo !: boolean;
  file !: File;
  duration !: number; 
  sectionList !: SectionResponse[];

  @ViewChild('closeBtn',{static : false}) closeBtn !: ElementRef;

  constructor(
    private toast : ToastService,
    private dashboardService : DashboardVideoService,
    private courseService : CourseService,
    private dialogRef : MatDialog,
    private communicateService : ComponetCommunicationService,
    @Inject(MAT_DIALOG_DATA) public data : {course_id : string,calledFor : string}
    ){}

  ngOnInit(){
    this.courseService.getSections(this.data.course_id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
       this.sectionList = res.sectionLists
      },
      error : err =>{
        console.log('error')
      }
    })
  }

  onAddedEvent(event : Event){
    const input = event.target as HTMLInputElement  

    if(!input.files?.length) return ;

    const reader = new FileReader
    const file = input.files[0] as any
    this.file = file

    // if(file.size > 20000000) {
    //   this.toast.fail('maximum 20 mb is allowed','max size limited')
    //   return
    // }

    reader.readAsDataURL(file)

    if(file.type.indexOf('video') <= -1) {
      this.isVideo = false;
      return;
    }

    this.isVideo = true

    reader.onload = e =>{
      this.url = (<FileReader>e.target).result

      const media = new Audio(reader.result as string);
      media.onloadedmetadata = () => {
         this.duration = Number(media.duration)
      }
    }

  }

  onFormSubmit(form : NgForm){

    if(!this.file) return;
    
    const formData = new FormData()
    formData.append('file', this.file)
    formData.append('details', JSON.stringify(form.value))
    formData.append('duration',this.duration.toString())

    this.dashboardService.uploadVideo(formData,this.data.calledFor)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : data =>{
        this.toast.success('video uploaded successfully')
        this.closeTheModal()
      },
      error : err => {
        this.toast.fail('failed to upload video')
      }
    })

  }

  onAddSection(){
    this.dialogRef.open(SectionPopupComponent,{
      data : {
        id : this.data.course_id,
        calledFor : this.data.calledFor
      }
    })

    this.communicateService.isDone
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        if(this.sectionList){
          this.sectionList.push(res)
        }else{
          this.sectionList = [res]
        }
      }
    })
  }

  closeTheModal(){
   const btnElem = this.closeBtn.nativeElement
   console.log(btnElem)
   btnElem.click()
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

}

