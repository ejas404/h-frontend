import { Component } from '@angular/core';
import { TutorProfileService } from '../../../../core/services/tutor/profile';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-request-course-popup',
  templateUrl: './request-course-popup.component.html',
  styleUrl: './request-course-popup.component.scss'
})
export class RequestCoursePopupComponent {

  private destroy$ = new Subject<void>();

  constructor(
    private service: TutorProfileService,
    private messageService: MessageService
  ) { }


  onFormSubmit(formData: NgForm) {
    this.service.requestCourse(formData.value)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: data => {
        this.successMessage()
      },
      error: err => {
        this.failureMessage()
      }
    })
  }

  successMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Course Requested Successfully'
    })
  }

  failureMessage() {
    this.messageService.add({
      severity: 'error',
      summary: 'Failed',
      detail: 'Failed to request course'
    })
  }

  
  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }


}
