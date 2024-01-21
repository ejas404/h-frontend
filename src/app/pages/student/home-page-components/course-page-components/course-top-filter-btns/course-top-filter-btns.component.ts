import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'course-top-filter-btns',
  templateUrl: './course-top-filter-btns.component.html',
  styleUrl: './course-top-filter-btns.component.scss'
})
export class CourseTopFilterBtnsComponent {

  // bg and border are tailwind class names for backgroud and border
  topFilterBtns = [
    { title: 'New', bg: 'bg-blue-700',border : 'border-blue-700' },
    { title: 'Popular', bg: 'bg-red-600',border : 'border-red-600' },
    { title: 'Free', bg: 'bg-green-600',border : 'border-green-600' },
    { title: 'Paid', bg: 'bg-amber-500',border : 'border-amber-500' }
  ]
  
  selectedFilter: string = 'New'
  @Output()filterEvent = new EventEmitter()

  filter(val: string) {
    if(typeof(val) !== 'string') return;
    
    this.selectedFilter = val
    this.filterEvent.emit(val)
  }
}
