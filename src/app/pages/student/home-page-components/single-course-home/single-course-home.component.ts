import { Component } from '@angular/core';
import { BASE_URL } from '../../../../core/constant/uri';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsResponse, CourseVideoResponseList } from '../../../../core/models/course';
import { HomePageCourseService } from '../../../../core/services/home/homepage-course';
import { Subject, takeUntil } from 'rxjs';
import { CourseService } from 'app/core/services/course_service';

@Component({
  selector: 'app-single-course-home',
  templateUrl: './single-course-home.component.html',
  styleUrl: './single-course-home.component.scss',
  providers : [HomePageCourseService, CourseService]
})
export class SingleCourseHomeComponent {

  private destroy$ = new Subject<void>();

  selectedSection !: number ;
  courseVideoList !:  CourseVideoResponseList[];
  courseDetails !: CourseDetailsResponse;

  constructor(
    private activateRoute : ActivatedRoute,
    private courseService : CourseService,
    private homePageCourseService : HomePageCourseService
  ){}

  ngOnInit(){
    const search = this.activateRoute.snapshot.params['id']

    this.fetchCourseData(search)
    this.fetchCourseVideoList(search)
  }

  fetchCourseData(id : string){
    this.homePageCourseService.getSingleCourse(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : data =>{
        this.courseDetails = data.courseDetails
      },
      error  : err =>{
        console.log(err)
      }
    })
  }

  fetchCourseVideoList(id : string){
    this.courseService.getCourseVideoList(id,'course')
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

  subscribeCourse(){

  }

  getCourse(){

  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

  
}
