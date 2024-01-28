import { Component, EventEmitter, Output } from '@angular/core';
import { UpcomingCourse } from 'app/core/models/course';
import { DashboardCourseService } from 'app/core/services/admin/dashboard_course_service';

@Component({
  selector: 'app-course-sidebar',
  templateUrl: './course-sidebar.component.html',
  styleUrl: './course-sidebar.component.scss',
  providers : [DashboardCourseService]
})
export class CourseSidebarComponent {
  upcomingList !: UpcomingCourse []
  @Output()courseSearchEvent = new EventEmitter()

  constructor(
    private adminCourseService : DashboardCourseService
  ){}


  ngOnInit(){
    this.adminCourseService.getUpcomingCourses().subscribe({
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
