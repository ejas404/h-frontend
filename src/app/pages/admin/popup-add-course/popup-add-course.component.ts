import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DashboardService } from '../../../core/services/admin/dashboard';
import { TutorModel } from '../../../core/models/tutor';
import { Store } from '@ngrx/store';
import { getTutorList } from '../../../core/state/admin/dashboard/reducer';
import * as DashboardActions from '../../../../app/core/state/admin/dashboard/action'
import { MessageService } from 'primeng/api';
import { CourseDetailsResponse } from '../../../core/models/course';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-popup-add-course',
  templateUrl: './popup-add-course.component.html',
  styleUrl: './popup-add-course.component.scss'
})
export class PopupAddCourseComponent {

  private destroy$ = new Subject<void>();

  tutorList !: TutorModel[];
  courseDetail !: CourseDetailsResponse;

  constructor(
    private service: DashboardService,
    private store: Store,
    private messageService: MessageService
  ) { }



  ngOnInit(): void {

    this.store.dispatch(DashboardActions.dashboardRequest());

    this.store.select(getTutorList)
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        this.tutorList = state
      })



  }

  onFormSubmit(formData: NgForm) {
    this.service.addCourse(formData.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.store.dispatch(DashboardActions.courseAddSuccess(data))
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
      detail: 'Course Updated Successfully'
    })
  }

  failureMessage() {
    this.messageService.add({
      severity: 'error',
      summary: 'Failed',
      detail: 'Failed to update course'
    })
  }


  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
