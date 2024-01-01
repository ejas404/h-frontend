import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAddCourseComponent } from '../popup-add-course/popup-add-course.component';
import { DashboardService } from '../../../core/services/admin/dashboard';
import { CourseDetailsResponse, TutorDetailsWithCourse } from '../../../core/models/course';
import { Store } from '@ngrx/store';
import { courseDetailsSuccess } from '../../../core/state/admin/dashboard/action';
import { getCourseList } from '../../../core/state/admin/dashboard/reducer';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrl: './admin-courses.component.scss'
})
export class AdminCoursesComponent implements OnInit{
courseList !: CourseDetailsResponse [];
tutorCourse !: TutorDetailsWithCourse[];

constructor(
  private dialogRef : MatDialog,
  private service : DashboardService,
  private store : Store
){}

ngOnInit(){
  this.fetchCourseData()
  this.setCourseData()
}

fetchCourseData(){
  this.service.getCourses().subscribe({
    next : data =>{
      this.store.dispatch(courseDetailsSuccess({successResponse : data}))
    },
    error  : err =>{
      console.log(err)
    }
  })
}

setCourseData(){
  this.store.select(getCourseList).subscribe({
    next : data =>{
     this.courseList = data.courseDetails;
     this.tutorCourse = data.tutorCourses
    },
    error  : err =>{
      console.log(err)
    }
  })
}

filterCourse(id : string){

  if(id === 'all'){
    this.setCourseData()
    return
  }

  this.store.select(getCourseList).subscribe({
    next : data =>{
      let array = data.courseDetails.slice()
      array = array.filter(each => each.tutor._id === id)
      this.courseList = array      
    }
  })
}

addCourse() {
  this.dialogRef.open(PopupAddCourseComponent)
}
deleteCourse(arg0: any) {

}
blockCourse(arg0: any) {

}

}
