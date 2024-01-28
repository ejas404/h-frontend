import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartModel } from 'app/core/models/cart_model';
import { HomePageCourseService } from 'app/core/services/home/homepage-course';
import { StudentCourseService } from 'app/core/services/student/student_course_service';

@Component({
  selector: 'app-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrl: './check-out-page.component.scss',
  providers : [StudentCourseService,HomePageCourseService]
})
export class CheckOutPageComponent {
  courseList$ !: CartModel[]
  subTotal !: number;
  checkOutDisable = true

  constructor(
    private studentCourseService: StudentCourseService,
    private homeCourseService : HomePageCourseService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']

    if(id) this.fetchCourseData(id)
    else this.fetchCartItems()
  }

  fetchCourseData (id : string){
    this.homeCourseService.getSingleCourse(id).subscribe({
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
    this.studentCourseService.getCartData().subscribe({
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
    
  }

}
