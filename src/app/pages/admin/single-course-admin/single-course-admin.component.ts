import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DashboardService } from '../../../core/services/admin/dashboard';
import { CourseDetailsResponse } from '../../../core/models/course';
import { courseDetailsSuccess } from '../../../core/state/admin/dashboard/action';
import { getCourseList } from '../../../core/state/admin/dashboard/reducer';
import { MatDialog } from '@angular/material/dialog';
import { CourseImagePopupComponent } from '../course-image-popup/course-image-popup.component';
import { BASE_URL } from '../../../core/constant/uri';
import { singleCourseDetailsSuccess } from '../../../core/state/admin/courses/action';
import { getSingleCourseData } from '../../../core/state/admin/courses/reducer';
import { PopupAddCourseComponent } from '../popup-add-course/popup-add-course.component';
import { PopupEditCourseComponent } from '../popup-edit-course/popup-edit-course.component';

@Component({
  selector: 'app-single-course-admin',
  templateUrl: './single-course-admin.component.html',
  styleUrl: './single-course-admin.component.scss'
})
export class SingleCourseAdminComponent {
  selectedSection !: number ;
  courseCover !: string;
  course_id !: string;

  sections = [
    {title : 'Section 1', class : '10'}, 
    {title : 'Section 2', class : '4'},
    {title : 'Section 3', class : '4'},
    {title : 'Section 4', class : '4'}
  ]

  courseDetails !: CourseDetailsResponse;

  constructor(
    private activateRoute : ActivatedRoute,
    private store : Store,
    private service : DashboardService,
    private dialogRef : MatDialog
  ){}

  ngOnInit(){
    const search = this.activateRoute.snapshot.params['id']

    this.course_id = search

    this.fetchCourseData(search)
    this.setCourseData(search)
  }

  fetchCourseData(id : string){
    this.service.getSingleCourse(id).subscribe({
      next : data =>{
        this.store.dispatch(singleCourseDetailsSuccess(data))
      },
      error  : err =>{
        console.log(err)
      }
    })
  }
  
  setCourseData(id : string){
    this.store.select(getSingleCourseData).subscribe({
      next : data =>{
       this.courseDetails = data

       if(this.courseDetails.cover){
        this.courseCover =  `${BASE_URL}/${this.courseDetails.cover.slice(7)}`
       }else{
        this.courseCover = '../../../../assets/fixed/depositphotos_132018592-stock-photo-online-courses-concept-with-hand.jpg'
       }

      },
      error  : err =>{
        console.log(err)
      }
    })
  }

 updateCover(id : string | undefined){

    this.dialogRef.open(CourseImagePopupComponent,{
      data : {id}
    })
 }

 editCourse(){
  this.dialogRef.open(PopupEditCourseComponent,{
    data : {
     id : this.course_id
    }
  })
 }
}
