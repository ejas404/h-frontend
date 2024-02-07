import { Component, EventEmitter, Output } from '@angular/core';
import { UpcomingCourse } from 'app/core/models/course';
import { DashboardCourseService } from 'app/core/services/admin/dashboard_course_service';
import { CourseService } from 'app/core/services/course_service';
import { StudentCourseService } from 'app/core/services/student/student_course_service';

@Component({
  selector: 'app-course-sidebar',
  templateUrl: './course-sidebar.component.html',
  styleUrl: './course-sidebar.component.scss',
  providers : [StudentCourseService]
})
export class CourseSidebarComponent {
  upcomingList !: UpcomingCourse []
  @Output()courseSearchEvent = new EventEmitter()

  constructor(
    private courseService : CourseService
  ){}


  ngOnInit(){
    this.courseService.getUpcomingCourses().subscribe({
      next : res =>{
        this.upcomingList = res.upcomingCourses
      },
      error : err =>{
        console.log(err)
      }
    })
  }

  courseSearch(val : string){
    if(typeof(val) !== 'string') return;
    this.courseSearchEvent.emit(val)
  }

}
