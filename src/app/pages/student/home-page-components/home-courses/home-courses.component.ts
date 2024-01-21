import { Component } from '@angular/core';
import { HomePageCourseService } from '../../../../core/services/home/homepage-course';
import { CourseDetailsResponse } from '../../../../core/models/course';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrl: './home-courses.component.scss',
  providers : [HomePageCourseService]
})
export class HomeCoursesComponent {

  private destroy$ = new Subject<void>();

  courses !: CourseDetailsResponse[];

  constructor(private service : HomePageCourseService){}

  ngOnInit(){
    this.fertchCourseDetails()
  }

  fertchCourseDetails(){
    this.service.getCourses()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : data =>{
        this.courses = data.courses
      },
      error : err =>{

      }
    })
  }

  
  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

}
