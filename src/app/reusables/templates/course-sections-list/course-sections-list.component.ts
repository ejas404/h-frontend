import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseDetailsResponse, CourseVideoResponseList } from 'app/core/models/course';
import { VideoResponseModel } from 'app/core/models/section_video_model';

@Component({
  selector: 'course-sections-list',
  templateUrl: './course-sections-list.component.html',
  styleUrl: './course-sections-list.component.scss'
})
export class CourseSectionsListComponent {

  selectedSection !: number

  @Input() user !: string
  @Input() bg !: string
  @Input() text !: string
  @Input() bg_section_list !: string

  @Input() calledFor !: string
  @Input() courseDetails !: CourseDetailsResponse
  @Input() videoList !: CourseVideoResponseList[]

  @Output() videoEvent = new EventEmitter()


  // set the course videolist route url dynamically
  setUserRoute() {
    let route = '/course'
    if (this.user === 'admin') route = '/admin/course';
    if (this.user === 'tutor') route = '/tutor/course';

    return route;
  }



  totalSectionDuration(videoList: VideoResponseModel[]): number {
    if (!videoList[0]) {
      return 0
    }

    let res = 0

    videoList.forEach(each => {
      res += each.duration
    })

    return Math.floor(res)

  }

  videoClick(id: string) {
    if (typeof (id) !== 'string') return;
    if (this.calledFor !== 'video') return
    this.videoEvent.emit(id)
  }

  sectionSelected(id: number) {
    if (this.selectedSection == id) {
      this.selectedSection = -1
      return
    }
    this.selectedSection = id
  }
}
