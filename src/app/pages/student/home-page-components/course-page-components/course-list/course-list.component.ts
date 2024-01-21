import { Component, Input } from '@angular/core';
import { CourseDetailsResponse } from 'app/core/models/course';

@Component({
  selector: 'home-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  @Input()courseList !: CourseDetailsResponse[];
  arr = [1,2,3,4]
}
