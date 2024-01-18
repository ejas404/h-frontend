import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from 'app/core/services/course_service';
import { ToastService } from 'app/core/services/shared/toast_service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-section-popup',
  templateUrl: './section-popup.component.html',
  styleUrl: './section-popup.component.scss'
})
export class SectionPopupComponent {

  private destroy$ = new Subject<void>()

  constructor(
    private courseService : CourseService,
    private toastService : ToastService,
    @Inject(MAT_DIALOG_DATA) public data : {id : string}
  ){}

  onFormSubmit(form : NgForm){
    this.courseService.addSection(form.value, 'admin')
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        this.toastService.success('course section added successfully')
      },
      error : err =>{
        this.toastService.fail('failed to update course section')
      }
    })
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }
}
