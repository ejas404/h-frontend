import { Component } from '@angular/core';
import { TutorProfileService } from '../../../core/services/tutor/profile';
import { Store } from '@ngrx/store';
import { tutorCourseSuccess } from '../../../core/state/tutor/profile/action';
import { CourseDetailsResponse } from '../../../core/models/course';
import { getTutorStoreData } from '../../../core/state/tutor/profile/reducer';
import { BASE_URL } from '../../../core/constant/uri';
import { MatDialog } from '@angular/material/dialog';
import { PopupAddCourseComponent } from '../../admin/popup-add-course/popup-add-course.component';
import { RequestCoursePopupComponent } from '../request-course-popup/request-course-popup.component';

@Component({
  selector: 'app-tutor-course',
  templateUrl: './tutor-course.component.html',
  styleUrl: './tutor-course.component.scss'
})
export class TutorCourseComponent {

  url : string = BASE_URL

  tutorCourses !: CourseDetailsResponse[];

    constructor(
      private service : TutorProfileService,
      private store : Store,
      private dialogRef : MatDialog
      ){}


      ngOnInit(){
        this.fetchCourses()
        this.setTutorCourse()
      }

      fetchCourses(){
        this.service.getCourses().subscribe({
          next : data =>{
            this.store.dispatch(tutorCourseSuccess(data))
          },
          error : err =>{
            console.log(err)
          }
        })
      }

      setTutorCourse(){
        this.store.select(getTutorStoreData).subscribe({
          next : data =>{
            this.tutorCourses = data.courses as CourseDetailsResponse[]
          },
          error : err =>{
            console.log(err)
          }
        })
      }

      requestCourse(){
        this.dialogRef.open(RequestCoursePopupComponent)
      }

}
