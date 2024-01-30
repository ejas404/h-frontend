import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartModel } from 'app/core/models/cart_model';
import { HomePageCourseService } from 'app/core/services/home/homepage-course';
import { StudentCourseService } from 'app/core/services/student/student_course_service';
import { StudentEnrollService } from 'app/core/services/student/student_enroll_service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrl: './check-out-page.component.scss',
  providers : [StudentCourseService,HomePageCourseService,StudentEnrollService]
})
export class CheckOutPageComponent {

  destroy$ = new Subject<void>()

  courseList$ !: CartModel[]
  subTotal !: number;
  checkOutDisable = true
  course_id !: string

  constructor(
    private studentCourseService: StudentCourseService,
    private homeCourseService : HomePageCourseService,
    private activatedRoute : ActivatedRoute,
    private enrollService : StudentEnrollService,
    private router : Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']

    if(id){
      this.course_id = id
      this.fetchCourseData(id)
    } 
    else{
      this.fetchCartItems()
    } 
  }

  fetchCourseData (id : string){
    this.homeCourseService.getSingleCourse(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: res => {
        const course = res.courseDetails
        this.courseList$ = [{details : [course], course_id : course._id as string }]
        this.subTotal = course.fee

        if (this.courseList$) {
          this.checkOutDisable = false
        }
      }
    })
  }

  fetchCartItems() {
    this.studentCourseService.getCartData()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: res => {
        this.courseList$ = res.cartItems
        this.subTotal = res.cartTotal

        if (this.courseList$) {
          this.checkOutDisable = false
        }
      }
    })
  }

  proceed(){
    const reqBody  : any = {
      amount : this.subTotal,
      course_id : this.course_id,
      isCart : this.course_id === undefined
    }
    
    this.enrollService.checkOut(reqBody)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        // navigates to the payment interface
        if(res.paid) window.location.href = res.url ;

        //navigates to the successpage
        if(res.success) this.router.navigateByUrl(`processing/${res.enid}`)
      },
      error : err =>{
        console.log(err)
      }
    })
    
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

}
