import { Component } from '@angular/core';
import { BASE_URL } from '../../../../core/constant/uri';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetailsResponse, CourseVideoResponseList } from '../../../../core/models/course';
import { HomePageCourseService } from '../../../../core/services/home/homepage-course';
import { Subject, takeUntil } from 'rxjs';
import { CourseService } from 'app/core/services/course_service';
import { StudentCourseService } from 'app/core/services/student/student_course_service';
import { ToastService } from 'app/core/services/shared/toast_service';
import { isStudentToken } from 'app/core/utils/check_token';
import { StudentEnrollService } from 'app/core/services/student/student_enroll_service';

@Component({
  selector: 'app-single-course-home',
  templateUrl: './single-course-home.component.html',
  styleUrl: './single-course-home.component.scss',
  providers : [HomePageCourseService, CourseService, StudentCourseService , StudentEnrollService]
})
export class SingleCourseHomeComponent {

  private destroy$ = new Subject<void>();

  user : 'student'|'profile' = 'student' 
  selectedSection !: number ;
  courseVideoList !:  CourseVideoResponseList[];
  progressList !: string[];
  courseDetails !: CourseDetailsResponse;
  cartItem !: boolean
  isEnrolled !: boolean 
  rating !:number;
  totalUsers !: number;

  constructor(
    private activatedRoute : ActivatedRoute,
    private courseService : CourseService,
    private homePageCourseService : HomePageCourseService,
    private studentCourseService : StudentCourseService,
    private enrollService : StudentEnrollService,
    private toastService : ToastService,
    private router : Router
  ){}

  ngOnInit(){
    //gets course id from the route path params
    const search = this.activatedRoute.snapshot.params['id']
    
    this.user = isStudentToken()? 'profile': this.user;

    this.fetchCourseData(search)
    this.fetchCourseVideoList(search)
    this.fetchCartList(search)
    this.fetchEnrollStatus(search)
    this.fetchProgress(search)
    this.fetchRating(search)
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

  
  fetchCartList(id : string){
      this.studentCourseService.getCartList()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next : res =>{
         if(res.cartList.includes(id)){
            this.cartItem = true
         }
        },
        error : err =>{
          console.log(err.error.message)
        }
      })
  }

  fetchEnrollStatus(id : string){
    this.enrollService.isCourseEnrolled(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res => {
        console.log('is enrolled ', res.success)
        this.isEnrolled = res.success
      },
      error : err =>{
        console.log(err)
        this.isEnrolled = false
      }
    })
  }

  
  fetchProgress(id : string){
    this.studentCourseService.getProgress(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res => {
        console.log('progress printing',res.progress)
        this.progressList = res.progress
      }
    })
  }

  addToCart(course_id : string | undefined){
    if(typeof(course_id) !== 'string') return;
    this.studentCourseService.addToCart(course_id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        this.cartItem = true
        this.toastService.success(res.msg)
      },
      error : err =>{
        this.toastService.fail(err.error.message || 'failed to add to cart')
      }
    })
  }

  fetchRating(id : string){
    this.courseService.getCourseRating(id).subscribe({
      next : res =>{
        this.totalUsers = res.count
        this.rating =  Math.round(res.rating)
      }
    })
  }

  getCourse(){
    this.router.navigateByUrl(`/checkout/${this.courseDetails._id}`)
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

  
}
