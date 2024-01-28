import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UpcomingCourse } from 'app/core/models/course';
import { DashboardCourseService } from 'app/core/services/admin/dashboard_course_service';
import { PopupAddCourseComponent } from 'app/shared/popups/course-popups/popup-add-course/popup-add-course.component';

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrl: './upcoming-courses.component.scss',
  providers :[DashboardCourseService]
})
export class UpcomingCoursesComponent {

  upcomingList !: UpcomingCourse []

  constructor(
    private dialogRef : MatDialog,
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


  addBtnClicked(){
    this.dialogRef.open(PopupAddCourseComponent,{
      data : {
        calledFor : 'upcoming'
      }
    })
  }
}
