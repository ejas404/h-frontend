import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CourseDetailsResponse } from 'app/core/models/course';
import { ToastService } from 'app/core/services/shared/toast_service';
import { StudentCourseService } from 'app/core/services/student/student_course_service';
import { checkCategoryType } from 'app/core/utils/check_category';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'home-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
  providers : [StudentCourseService]
})
export class CourseListComponent {

  destroy$ = new Subject<void>()
  courseListPreview !: CourseDetailsResponse[];

  constructor(
    private studentCourseService : StudentCourseService,
    private toastService : ToastService
  ){}

  @Input()courseList !: CourseDetailsResponse[];
  @Input()cartList : string[] = [] 
  @Input()search !: string
  @Input()enrollList !: string[]

  ngOnInit(){
    this.courseListPreview = this.courseList
    console.log('enroll lists',this.enrollList)
  }

  addToCart(course_id : string | undefined){
    if(typeof(course_id) !== 'string') return;
    this.cartList.push(course_id)

    this.studentCourseService.addToCart(course_id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        this.toastService.success(res.msg)
      },
      error : err =>{
        this.cartList.pop()
        this.toastService.fail(err.error.message || 'failed to add to cart')
      }
    })
  }

  ngDoCheck(){
    if(this.search){
      const searchVal = this.search.toLowerCase()
      this.courseListPreview = this.courseList.filter((each) : any  =>  {
        if(each.title.toLowerCase().includes(searchVal)){
          return each
        }
        if(each.subCategory && typeof(each.subCategory)!== 'string' && each.subCategory.name.toLowerCase().includes(searchVal)){
          return each
        }
      })
    }else{
      this.courseListPreview = this.courseList
    }
  }

  checkCategory(data : any){
    if(checkCategoryType(data)){
      return data.name
    }
  }


  ngOnDestroy(){
    this.destroy$.next()
  }
}
