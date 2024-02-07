import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsResponse, CourseVideoResponseList } from 'app/core/models/course';
import { VideoWithUrl } from 'app/core/models/section_video_model';
import { CourseService } from 'app/core/services/course_service';
import { HomePageCourseService } from 'app/core/services/home/homepage-course';
import { ToastService } from 'app/core/services/shared/toast_service';
import { StudentCourseService } from 'app/core/services/student/student_course_service';
import { StudentEnrollService } from 'app/core/services/student/student_enroll_service';
import { isStudentToken } from 'app/core/utils/check_token';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-student-video-preview',
  templateUrl: './student-video-preview.component.html',
  styleUrl: './student-video-preview.component.scss',
  providers: [HomePageCourseService, CourseService, StudentCourseService,StudentEnrollService]
})
export class StudentVideoPreviewComponent {

  user: string = 'student'
  course_id !: string;
  video_id !: string;

  destroy$ = new Subject<void>()

  courseVideoList !: CourseVideoResponseList[];
  courseDetails !: CourseDetailsResponse;
  videoDetails !: VideoWithUrl;
  progressList : string[] = []
  isEnrolled : boolean = false; 

  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService,
    private homePageCourseService: HomePageCourseService,
    private studentCourseSevice: StudentCourseService,
    private enrollService : StudentEnrollService,
    private toastService : ToastService
  ) { }

  ngOnInit() {

    this.user = isStudentToken() ? 'profile' : this.user;

    this.course_id = this.activateRoute.snapshot.params['id']
    this.video_id = this.activateRoute.snapshot.params['video']

    this.fetchCourseData(this.course_id)
    this.fetchCourseVideoList(this.course_id)
    this.fetchVideo(this.video_id)
    this.fetchProgress(this.course_id)
    this.fetchEnrollStatus(this.course_id)
  }

  fetchCourseData(id: string) {
    this.homePageCourseService.getSingleCourse(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.courseDetails = data.courseDetails
        },
        error: err => {
          console.log(err)
        }
      })
  }

  fetchCourseVideoList(id: string) {
    this.courseService.getCourseVideoList(id, 'course')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.courseVideoList = res.courseVideoList
        },
        error: err => {
          console.log(err)
        }
      })
  }

  fetchVideo(id: string) {
    const route = isStudentToken() ? 'student':'course';
    this.studentCourseSevice.getVideo(id,route)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.videoDetails = res.video
        },
        error: err => {
          console.log(err)
        }
      })
  }

  fetchProgress(id : string){
    if(!isStudentToken()) return;
    this.studentCourseSevice.getProgress(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res => {
        this.progressList = res.progress
      }
    })
  }

  fetchEnrollStatus(id : string){
    if(!isStudentToken()) return;
    this.enrollService.isCourseEnrolled(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res => {
        console.log('enrollment printing', res)
        this.isEnrolled = res.success
      },
      error : err =>{
        console.log(err)
      }
    })
  }

  videoChanged(id: string) {
    if (typeof (id) !== 'string' || id === this.videoDetails._id) return;
    this.fetchVideo(id)
  }

  endOfVideo() {
    if(!isStudentToken()) return;
    this.studentCourseSevice.addProgress(this.course_id, this.video_id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res => {
        this.progressList.push(this.video_id)
        this.toastService.success('class completed')
      }
    })
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

}
