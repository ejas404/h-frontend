import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DashboardService } from '../../../core/services/admin/dashboard';
import { CourseDetailsResponse, CourseVideoResponseList } from '../../../core/models/course';
import { MatDialog } from '@angular/material/dialog';
import { CourseImagePopupComponent } from '../../../shared/popups/course-popups/course-image-popup/course-image-popup.component';
import { courseApproveSuccess, singleCourseDetailsSuccess } from '../../../core/state/admin/courses/action';
import { getSingleCourseData } from '../../../core/state/admin/courses/reducer';
import { PopupEditCourseComponent } from '../../../shared/popups/course-popups/popup-edit-course/popup-edit-course.component';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { VideoUploadPopupComponent } from 'app/shared/popups/video-upload-popup/video-upload-popup.component';
import { CourseService } from 'app/core/services/course_service';
import { ToastService } from 'app/core/services/shared/toast_service';
import { DashboardCourseService } from 'app/core/services/admin/dashboard_course_service';

@Component({
  selector: 'app-single-course-admin',
  templateUrl: './single-course-admin.component.html',
  styleUrl: './single-course-admin.component.scss',
  providers : [DashboardCourseService]
})
export class SingleCourseAdminComponent {

  private destroy$ = new Subject<void>();

  courseDetails !: CourseDetailsResponse;
  courseVideoList !: CourseVideoResponseList[] ;
  selectedSection !: number;
  course_id !: string;


  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store,
    private service: DashboardCourseService,
    private courseService : CourseService,
    private dialogRef: MatDialog,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    const search = this.activateRoute.snapshot.params['id']
    this.course_id = search

    this.fetchCourseData(search)
    this.setCourseData(search)
    this.fetchCourseVideoList(search)
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

  fetchCourseVideoList(id : string){
    this.courseService.getCourseVideoList(id,'admin')
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        this.courseVideoList = res.courseVideoList
      },
      error : err =>{
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
          this.toastService.success('Course approval successfully completed')
        },
        error: err => {
          this.toastService.fail(err.error.message || 'Course approval failed to complete')
        }
      })
  }

  addCourseVideo() {
    this.dialogRef.open(VideoUploadPopupComponent,{
      height : '90vh',
      width : '90%',
      data : {
        course_id : this.course_id
      }
    })
  }

  cancelApprove() {

  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
