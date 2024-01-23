import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsResponse, CourseVideoResponseList } from 'app/core/models/course';
import { VideoWithUrl } from 'app/core/models/section_video_model';
import { CourseService } from 'app/core/services/course_service';
import { HomePageCourseService } from 'app/core/services/home/homepage-course';
import { StudentCourseService } from 'app/core/services/student/student_course_service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-student-video-preview',
  templateUrl: './student-video-preview.component.html',
  styleUrl: './student-video-preview.component.scss',
  providers : [HomePageCourseService, CourseService, StudentCourseService]
})
export class StudentVideoPreviewComponent {

  user !: string;
 
  destroy$ = new Subject<void>()

  courseVideoList !: CourseVideoResponseList[];
  courseDetails !: CourseDetailsResponse;
  videoDetails !: VideoWithUrl;

  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService,
    private homePageCourseService: HomePageCourseService,
    private studentCourseSevice : StudentCourseService
  ) { }

  ngOnInit() {

    const isLogged = sessionStorage.getItem('auth_token')

    this.user = isLogged? 'profile': 'student';
    const search = this.activateRoute.snapshot.params['id']
    const video_id  = this.activateRoute.snapshot.params['video']

    this.fetchCourseData(search)
    this.fetchCourseVideoList(search)
    this.fetchVideo(video_id)
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

  fetchVideo(id : string){
    this.studentCourseSevice.getVideo(id, )
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



}
