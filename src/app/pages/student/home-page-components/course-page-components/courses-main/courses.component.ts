import { Component } from '@angular/core';
import { CourseDetailsResponse } from 'app/core/models/course';
import { HomePageCourseService } from 'app/core/services/home/homepage-course';
import { Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  providers: [HomePageCourseService]
})
export class CoursesComponent {
  private destroy$ = new Subject<void>();

  courses !: CourseDetailsResponse[];
  previewCourse !: CourseDetailsResponse[];

  constructor(private service: HomePageCourseService) { }

  ngOnInit() {
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


  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
