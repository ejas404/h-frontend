import { Component, Input } from '@angular/core';
import { CourseDetailsResponse, CourseVideoResponseList } from 'app/core/models/course';
import { VideoResponseModel } from 'app/core/models/section_video_model';

@Component({
  selector: 'course-sections-list',
  templateUrl: './course-sections-list.component.html',
  styleUrl: './course-sections-list.component.scss'
})
export class CourseSectionsListComponent {

  selectedSection !: number

  @Input()user !: string
  @Input()bg !: string
  @Input()text !: string
  @Input()bg_section_list !: string

  @Input()videoList !:  CourseVideoResponseList[] 


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

  sectionSelected(id : number){
    if(this.selectedSection == id){
      this.selectedSection = -1 
      return
    }
    this.selectedSection = id
  }
}
