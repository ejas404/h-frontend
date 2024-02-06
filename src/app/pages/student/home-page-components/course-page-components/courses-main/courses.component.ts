import { Component } from '@angular/core';
import { CourseDetailsResponse } from 'app/core/models/course';
import { EnrollCourseModels } from 'app/core/models/enroll_models';
import { HomePageCourseService } from 'app/core/services/home/homepage-course';
import { StudentCourseService } from 'app/core/services/student/student_course_service';
import { StudentEnrollService } from 'app/core/services/student/student_enroll_service';
import { Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  providers: [HomePageCourseService, StudentCourseService, StudentEnrollService]
})
export class CoursesComponent {
  private destroy$ = new Subject<void>();

  courses !: CourseDetailsResponse[];
  previewCourse !: CourseDetailsResponse[];
  cartList !: string[];
  enrollList : string[] = []
  search !: string;

  constructor(
    private service: HomePageCourseService,
    private studentCourseService: StudentCourseService,
    private enrollService: StudentEnrollService
  ) { }

  ngOnInit() {
    this.checkUserCart()
    this.fertchCourseDetails()
    this.fetchEnrollList()
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

  fetchEnrollList() {
    this.enrollService.getEnrollList()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.enrollList = res.list.map(each => each.course._id as string)
        },
        error: err => {
          this.enrollList = []
          console.log(err)
        }
      })
  }

  filterCourse(val: string) {
    if (typeof (val) !== 'string') return;
    if (val === 'Free') {
      this.previewCourse = this.courses.filter(each => each.fee === 0)
      return
    }
    if (val === 'Paid') {
      this.previewCourse = this.courses.filter(each => each.fee > 0)
      return
    }
    this.previewCourse = this.courses

  }

  checkUserCart() {
    let isLogged = sessionStorage.getItem('auth_token')
    if (isLogged) {
      this.studentCourseService.getCartList()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: res => {
            this.cartList = res.cartList
          },
          error: err => {
            console.log(err.error.message)
          }
        })
    }
  }

  courseSearched(val: string) {
    if (typeof (val) !== 'string') return;
    this.search = val
  }


  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
