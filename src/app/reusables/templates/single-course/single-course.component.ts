import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseDetailsResponse, CourseVideoResponseList } from '../../../core/models/course';
import { VideoResponseModel } from 'app/core/models/section_video_model';
import { checkCategoryType } from 'app/core/utils/check_category';

@Component({
  selector: 'single-course-reusable',
  templateUrl: './single-course.component.html',
  styleUrl: './single-course.component.scss'
})
export class SingleCourseReusableComponent {

  selectedSection !: number

  @Input()user !: 'admin'|'student'|'tutor'
  @Input()bg !: string
  @Input()text !: string
  @Input()bg_section_list !: string


  @Input()courseDetails !: CourseDetailsResponse
  @Input()videoList !:  CourseVideoResponseList[] 
  @Input()sections !: {title : string, class : string}[]

  @Output()approveCourse = new EventEmitter()
  @Output()disAppproveCourse = new EventEmitter()
  @Output()edit = new EventEmitter()
  @Output()cover = new EventEmitter()
  @Output()sub = new EventEmitter()
  @Output()buy = new EventEmitter()
  @Output()video = new EventEmitter()


  approve(){
    this.approveCourse.emit(null)
  }
  disApprove(){
    this.disAppproveCourse.emit(null)
  }
  editCourseEvent(){
    this.edit.emit(null)
  }
  updateCoverEvent(){
    this.cover.emit(null)
  }

  subscribe(){
    this.sub.emit(null)
  }
  buyNow(){
    this.buy.emit(null)
  }
  addVideo(){
    this.video.emit(null)
  }

  // set the course videolist route url dynamically
  setUserRoute(){
    let route = '/course'
    if(this.user === 'admin') route = '/admin/course' ;
    if(this.user === 'tutor') route = '/tutor/course' ;

    return route;
  }

  // calculate the sections video duration
  totalSectionDuration(videoList :VideoResponseModel[] ) : string{
    
    if(!videoList[0]) return '0';
    let res = 0
    videoList.forEach(each => res+=each.duration )

    return Math.floor(res)+''

  }

  checkCategory(data :any ){
    if(!checkCategoryType(data)) return;
    return data.name
  }
}
