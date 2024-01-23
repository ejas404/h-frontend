import { Component, Input } from '@angular/core';
import { CourseDetails, CourseDetailsResponse } from 'app/core/models/course';
import { VideoWithUrl } from 'app/core/models/section_video_model';

@Component({
  selector: 'video-preview',
  templateUrl: './video-preview.component.html',
  styleUrl: './video-preview.component.scss'
})
export class VideoPreviewComponent {
  @Input()course !: CourseDetailsResponse
  @Input()video !: VideoWithUrl

}
