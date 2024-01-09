import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-link',
  template: ' <a class="hover:text-blue-600 hover:underline text-sm" routerLink="/admin/course/{{course_id}}">{{title}}...</a> ',
})
export class CourseLinkReusableComponent {
  @Input()course_id !: string | undefined;
  @Input()title !: string
}
