import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TutorModel } from '../../../../core/models/tutor';
import { CourseDetailsResponse } from '../../../../core/models/course';
import { getTutorList } from '../../../../core/state/admin/dashboard/reducer';
import * as DashboardActions from '../../../../core/state/admin/dashboard/action'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { courseUpdateSuccess, singleCourseDetailsSuccess } from '../../../../core/state/admin/courses/action';
import { getSingleCourseData } from '../../../../core/state/admin/courses/reducer';
import { Subject, takeUntil } from 'rxjs';
import { DashboardCourseService } from 'app/core/services/admin/dashboard_course_service';
import { CourseService } from 'app/core/services/course_service';
import { ToastService } from 'app/core/services/shared/toast_service';

@Component({
  selector: 'app-popup-edit-course',
  templateUrl: './popup-edit-course.component.html',
  styleUrl: './popup-edit-course.component.scss',
  providers: [DashboardCourseService, CourseService]
})
export class PopupEditCourseComponent {

  private destroy$ = new Subject<void>();

  tutorList !: TutorModel[];
  courseDetail !: CourseDetailsResponse;

  constructor(
    private courseService: CourseService,
    private store: Store,
    private toastService : ToastService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string, calledFor: string }
  ) { }



  ngOnInit(): void {
    this.fetchTutorList()
    this.setCourseData()
  }

  fetchTutorList() {
    if(this.data.calledFor === 'tutor') return;
    this.store.dispatch(DashboardActions.dashboardRequest());

    this.store.select(getTutorList)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: state => {
          this.tutorList = state
        }
      })
  }


  setCourseData() {
    this.store.select(getSingleCourseData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.courseDetail = data

        },
        error: err => {
          console.log(err)
        }
      })
  }


  onFormSubmit(formData: NgForm) {
    this.courseService.updateCourse(formData.value, this.courseDetail._id as string, this.data.calledFor)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.store.dispatch(courseUpdateSuccess(data))
         this.toastService.success('Course Updated Successfully')
        },
        error: err => {
          this.toastService.fail('Failed to update course')
        }
      })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
