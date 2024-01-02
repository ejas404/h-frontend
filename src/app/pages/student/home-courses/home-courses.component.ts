import { Component } from '@angular/core';
import { HomePageCourseService } from '../../../core/services/home/homepage-course';
import { CourseDetailsResponse } from '../../../core/models/course';

@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrl: './home-courses.component.scss'
})
export class HomeCoursesComponent {

  courses !: CourseDetailsResponse[];

  constructor(private service : HomePageCourseService){}

  ngOnInit(){
    this.fertchCourseDetails()
  }

  fertchCourseDetails(){
    this.service.getCourses().subscribe({
      next : data =>{
        this.courses = data.courses
      },
      error : err =>{

      }
    })
  }
}
