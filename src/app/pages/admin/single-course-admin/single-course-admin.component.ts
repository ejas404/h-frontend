import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DashboardService } from '../../../core/services/admin/dashboard';
import { CourseDetailsResponse } from '../../../core/models/course';
import { MatDialog } from '@angular/material/dialog';
import { CourseImagePopupComponent } from '../../../shared/popups/course-popups/course-image-popup/course-image-popup.component';
import { courseApproveSuccess, singleCourseDetailsSuccess } from '../../../core/state/admin/courses/action';
import { getSingleCourseData } from '../../../core/state/admin/courses/reducer';
import { PopupEditCourseComponent } from '../../../shared/popups/course-popups/popup-edit-course/popup-edit-course.component';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-single-course-admin',
  templateUrl: './single-course-admin.component.html',
  styleUrl: './single-course-admin.component.scss'
})
export class SingleCourseAdminComponent {

  private destroy$ = new Subject<void>();


  selectedSection !: number;
  course_id !: string;

  sections = [
    { title: 'Section 1', class: '10' },
    { title: 'Section 2', class: '4' },
    { title: 'Section 3', class: '4' },
    { title: 'Section 4', class: '4' }
  ]

  courseDetails !: CourseDetailsResponse;

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store,
    private service: DashboardService,
    private dialogRef: MatDialog,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    const search = this.activateRoute.snapshot.params['id']

    this.course_id = search

    this.fetchCourseData(search)
    this.setCourseData(search)
  }

  fetchCourseData(id: string) {
    this.service.getSingleCourse(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.store.dispatch(singleCourseDetailsSuccess(data))
        },
        error: err => {
          console.log(err)
        }
      })
  }

  setCourseData(id: string) {
    this.store.select(getSingleCourseData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.courseDetails = data

        },
        error: err => {
          console.log(err)
        }
      })
  }

  updateCover() {
    const id = this.course_id

    this.dialogRef.open(CourseImagePopupComponent, {
      data: { id }
    })
  }

  editCourse() {
    this.dialogRef.open(PopupEditCourseComponent, {
      data: {
        id: this.course_id
      }
    })
  }

  approveCourse() {
    this.service.approveCourseRequest(this.course_id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.store.dispatch(courseApproveSuccess(data))
          this.successMessage('Course approval successfully completed')
        },
        error: data => {
          this.failureMessage('Course approval failed to complete')
        }
      })
  }

  cancelApprove() {

  }

  successMessage(msg: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: msg
    })
  }

  failureMessage(msg: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Failed',
      detail: msg
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
