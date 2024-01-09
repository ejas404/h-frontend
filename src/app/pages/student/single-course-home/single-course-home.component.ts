import { Component } from '@angular/core';
import { BASE_URL } from '../../../core/constant/uri';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsResponse } from '../../../core/models/course';
import { HomePageCourseService } from '../../../core/services/home/homepage-course';

@Component({
  selector: 'app-single-course-home',
  templateUrl: './single-course-home.component.html',
  styleUrl: './single-course-home.component.scss'
})
export class SingleCourseHomeComponent {
  selectedSection !: number ;

  sections = [
    {title : 'Section 1', class : '10'}, 
    {title : 'Section 2', class : '4'},
    {title : 'Section 3', class : '4'},
    {title : 'Section 4', class : '4'}
  ]

  courseDetails !: CourseDetailsResponse;

  constructor(
    private activateRoute : ActivatedRoute,
    private service : HomePageCourseService
  ){}

  ngOnInit(){
    const search = this.activateRoute.snapshot.params['id']

    this.fetchCourseData(search)
  }

  fetchCourseData(id : string){
    this.service.getSingleCourse(id).subscribe({
      next : data =>{
        this.courseDetails = data.courseDetails
      },
      error  : err =>{
        console.log(err)
      }
    })
  }

  subscribeCourse(){

  }

  getCourse(){

  }
  
}
