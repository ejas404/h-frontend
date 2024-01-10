import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DashboardService } from '../../../../core/services/admin/dashboard';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { TutorModel } from '../../../../core/models/tutor';
import { CourseDetailsResponse } from '../../../../core/models/course';
import { getTutorList } from '../../../../core/state/admin/dashboard/reducer';
import * as DashboardActions from '../../../../core/state/admin/dashboard/action' 
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { courseUpdateSuccess, singleCourseDetailsSuccess } from '../../../../core/state/admin/courses/action';
import { getSingleCourseData } from '../../../../core/state/admin/courses/reducer';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-popup-edit-course',
  templateUrl: './popup-edit-course.component.html',
  styleUrl: './popup-edit-course.component.scss'
})
export class PopupEditCourseComponent {

  private destroy$ = new Subject<void>();

  tutorList !: TutorModel[];
  courseDetail !: CourseDetailsResponse;

  constructor(
    private service: DashboardService,
    private store: Store,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) { }



  ngOnInit(): void {
    this.store.dispatch(DashboardActions.dashboardRequest());

    this.store.select(getTutorList)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : state => {
        this.tutorList = state
      }
    })

    this.fetchCourseData(this.data.id)
    this.setCourseData()
  }

  fetchCourseData(id : string){
    this.service.getSingleCourse(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : data =>{
        this.store.dispatch(singleCourseDetailsSuccess(data))
      },
      error  : err =>{
        console.log(err)
      }
    })
  }

  setCourseData(){
    this.store.select(getSingleCourseData)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : data =>{
       this.courseDetail = data

      },
      error  : err =>{
        console.log(err)
      }
    })
  }


  onFormSubmit(formData: NgForm) {
    this.service.updateCourse(formData.value , this.courseDetail._id as string)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: data => {
        this.store.dispatch(courseUpdateSuccess(data))
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

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }


}
