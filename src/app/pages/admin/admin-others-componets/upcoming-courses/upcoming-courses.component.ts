import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAddCourseComponent } from 'app/shared/popups/course-popups/popup-add-course/popup-add-course.component';

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrl: './upcoming-courses.component.scss'
})
export class UpcomingCoursesComponent {

  img !: string
  arr = [1,2,3,4]

  constructor(
    private dialogRef : MatDialog
  ){}

  addBtnClicked(){
    this.dialogRef.open(PopupAddCourseComponent,{
      data : {
        calledFor : 'upcoming'
      }
    })
  }
}
