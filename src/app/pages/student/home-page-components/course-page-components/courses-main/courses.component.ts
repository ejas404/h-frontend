import { Component } from '@angular/core';
import { CourseDetailsResponse } from 'app/core/models/course';
import { HomePageCourseService } from 'app/core/services/home/homepage-course';
import { StudentCourseService } from 'app/core/services/student/student_course_service';
import { Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  providers: [HomePageCourseService , StudentCourseService]
})
export class CoursesComponent {
  private destroy$ = new Subject<void>();

  courses !: CourseDetailsResponse[];
  previewCourse !: CourseDetailsResponse[];
  cartList !: string[];
  search !: string;

  constructor(
    private service: HomePageCourseService,
    private studentCourseService : StudentCourseService
    ) { }

  ngOnInit() {
    this.checkUserCart()
    this.fertchCourseDetails()
  }

  fertchCourseDetails() {
    this.service.getCourses()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.courses = data.courses
          this.previewCourse = data.courses
        },
        error: err => {

        }
      })
  }

  filterCourse(val : string){
    if(typeof(val) !== 'string') return;
    if(val === 'Free'){
      this.previewCourse = this.courses.filter(each => each.fee === 0)
      return
    }

    else if(val === 'Paid'){
      this.previewCourse = this.courses.filter(each => each.fee > 0)
      return
    }
    else{
      this.previewCourse = this.courses
    }
    
  }

  checkUserCart(){
    let isLogged = sessionStorage.getItem('auth_token')
    if(isLogged){
      this.studentCourseService.getCartList()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next : res =>{
         this.cartList = res.cartList
        },
        error : err =>{
          console.log(err.error.message)
        }
      })
    }
  }

  courseSearched(val : string){
    if(typeof(val) !== 'string') return;
    this.search = val
  }


  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
