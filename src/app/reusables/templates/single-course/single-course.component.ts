import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseDetailsResponse, CourseVideoResponseList } from '../../../core/models/course';
import { VideoResponseModel } from 'app/core/models/section_video_model';

@Component({
  selector: 'single-course-reusable',
  templateUrl: './single-course.component.html',
  styleUrl: './single-course.component.scss'
})
export class SingleCourseReusableComponent {

  selectedSection !: number

  @Input()user !: string
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

  totalSectionDuration(videoList :VideoResponseModel[] ) : string{
    if(!videoList[0]){
      return '0'
    }

    let res = 0

    videoList.forEach(each =>{
      res+=each.duration
    })

    return Math.floor(res)+''

  }

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

  checkCategory(data : string | {name : string} | undefined){
    if(typeof(data) === 'string' || typeof(data)=== 'undefined') return;
    return data.name
  }
}
