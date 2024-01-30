import { Component, Input } from '@angular/core';
import { UpcomingCourse } from 'app/core/models/course';

@Component({
  selector: 'small-course-list',
  templateUrl: './small-course-list.component.html',
  styleUrl: './small-course-list.component.scss'
})
export class SmallCourseListComponent {
  @Input() courseList!: UpcomingCourse []
}
