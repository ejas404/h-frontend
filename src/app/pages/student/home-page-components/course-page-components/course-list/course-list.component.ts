import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CourseDetailsResponse } from 'app/core/models/course';
import { ToastService } from 'app/core/services/shared/toast_service';
import { StudentCourseService } from 'app/core/services/student/student_course_service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'home-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
  providers : [StudentCourseService]
})
export class CourseListComponent {

  destroy$ = new Subject<void>()
  inCart = false;

  constructor(
    private studentCourseService : StudentCourseService,
    private toastService : ToastService
  ){}

  @Input()courseList !: CourseDetailsResponse[];
  @ViewChild('addToCartBtn',{static : false})cartBtn !: ElementRef



  addToCart(course_id : string | undefined){
    if(typeof(course_id) !== 'string') return;

    this.studentCourseService.addToCart(course_id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        this.toastService.success(res.msg)
      },
      error : err =>{
        this.toastService.fail(err.error.message || 'failed to add to cart')
      }
    })
  }




  ngOnDestroy(){
    this.destroy$.next()
  }
}
