import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseDetailsResponse } from '../../core/models/course';

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
  @Input()sections !: {title : string, class : string}[]

  @Output()approveCourse = new EventEmitter()
  @Output()disAppproveCourse = new EventEmitter()
  @Output()edit = new EventEmitter()
  @Output()cover = new EventEmitter()
  @Output()sub = new EventEmitter()
  @Output()buy = new EventEmitter()


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
}
