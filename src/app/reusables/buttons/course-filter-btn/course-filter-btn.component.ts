import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'course-filter-btn',
  template: `<div class="flex items-center w-[7rem] py-2 px-1 border {{border}} rounded-md cursor-pointer">
              <div class="{{bg}} w-[2rem] h-[2rem] rounded-full me-1 flex items-center justify-center">
              <ng-icon class="text-md text-white" name='{{iconName}}'></ng-icon>
              </div>
              <p class="text-sm font-bold">{{title}}</p>
            </div>`
})
export class CourseFilterBtnReusableComponent {
  @Input() iconName !: string;
  @Input() bg !: string;
  @Input() border !: string;  
  @Input() title !: string;

}
