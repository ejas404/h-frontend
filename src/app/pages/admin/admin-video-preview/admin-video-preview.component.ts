import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsResponse, CourseVideoResponseList } from 'app/core/models/course';
import { VideoWithUrl } from 'app/core/models/section_video_model';
import { DashboardCourseService } from 'app/core/services/admin/dashboard_course_service';
import { DashboardVideoService } from 'app/core/services/admin/dashboard_video_service';
import { CourseService } from 'app/core/services/course_service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'admin-video-preview',
  templateUrl: './admin-video-preview.component.html',
  styleUrl: './admin-video-preview.component.scss',
  providers : [DashboardCourseService,DashboardVideoService]
})
export class AdminVideoPreviewComponent {
  
  destroy$ = new Subject<void>()

  courseVideoList !: CourseVideoResponseList[];
  courseDetails !: CourseDetailsResponse;
  videoDetails !: VideoWithUrl;

  constructor(
    private activateRoute: ActivatedRoute,
    private dbcService : DashboardCourseService,
    private dbVideoService : DashboardVideoService,
    private courseService: CourseService
  ) { }

  ngOnInit() {

    const search = this.activateRoute.snapshot.params['id']
    const video_id = this.activateRoute.snapshot.params['video']

    this.fetchCourseData(search)
    this.fetchCourseVideoList(search)
    this.fetchVideo(video_id)
  }

  fetchCourseData(id: string) {
    this.dbcService.getSingleCourse(id)
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
    this.dbVideoService.getVideo(id,'admin')
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
