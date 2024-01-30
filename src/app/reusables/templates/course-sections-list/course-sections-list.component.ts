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
  isHyper = true

  @Input() user !: string
  @Input() bg !: string
  @Input() text !: string
  @Input() bg_section_list !: string
  @Input() isEnrolled !: boolean


  @Input() calledFor !: string
  @Input() courseDetails !: CourseDetailsResponse
  @Input() videoList !: CourseVideoResponseList[]

  @Output() videoEvent = new EventEmitter()


  // set the course videolist route url dynamically
  setUserRoute(id: string | undefined, video: VideoResponseModel) : string | undefined  {
    if (typeof (id) !== 'string') return;
    
    if (this.user === 'student' || this.user === 'profile' && !this.isEnrolled) {
      let route = !video.isPaid?`/course/${id}/${video._id}`: undefined;
      return route;
    }

    if(this.user === 'profile' && this.isEnrolled){
      return `/course/${id}/${video._id}`
    }

    if (this.user === 'admin') return `/admin/course/${id}/${video._id}`
    if (this.user === 'tutor') return `/tutor/course/${id}/${video._id}`

    return ''

  }

  checkHyper( video: VideoResponseModel) : boolean {
    if (this.user === 'student' || this.user === 'profile' && !this.isEnrolled) {
      if(video.isPaid) { return false }
      else { return true } 
    }

    return true;
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
