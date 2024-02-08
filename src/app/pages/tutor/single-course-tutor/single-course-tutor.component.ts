import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CourseDetailsResponse, CourseVideoResponseList } from 'app/core/models/course';
import { CourseService } from 'app/core/services/course_service';
import { ToastService } from 'app/core/services/shared/toast_service';
import { TutorCourseService } from 'app/core/services/tutor/tutor_course_service';
import { singleCourseDetailsSuccess } from 'app/core/state/admin/courses/action';
import { getSingleCourseData } from 'app/core/state/admin/courses/reducer';
import { CourseImagePopupComponent } from 'app/shared/popups/course-popups/course-image-popup/course-image-popup.component';
import { PopupEditCourseComponent } from 'app/shared/popups/course-popups/popup-edit-course/popup-edit-course.component';
import { VideoUploadPopupComponent } from 'app/shared/popups/video-upload-popup/video-upload-popup.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-single-course-tutor',
  templateUrl: './single-course-tutor.component.html',
  styleUrl: './single-course-tutor.component.scss',
  providers : [TutorCourseService,CourseService]
})
export class SingleCourseTutorComponent {
  private destroy$ = new Subject<void>();

  courseDetails !: CourseDetailsResponse;
  courseVideoList !: CourseVideoResponseList[] ;
  selectedSection !: number;
  course_id !: string;


  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store,
    private service: TutorCourseService,
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
    this.courseService.getCourseVideoList(id,'tutor')
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
        id: this.course_id,
        calledFor : 'tutor'
      }
    })
  }


  addCourseVideo() {
    this.dialogRef.open(VideoUploadPopupComponent,{
      height : '90vh',
      width : '90%',
      data : {
        course_id : this.course_id,
        calledFor : 'tutor'
      }
    })
  }


  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
