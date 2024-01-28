import { Component, EventEmitter, Output } from '@angular/core';
import { ComponetCommunicationService } from 'app/core/services/shared/communicate_service';

@Component({
  selector: 'app-course-search-bar',
  templateUrl: './course-search-bar.component.html',
  styleUrl: './course-search-bar.component.scss'
})
export class CourseSearchBarComponent {
  @Output()searchedEvent = new EventEmitter()

  debounce(func : (event : Event)=>void , timeout = 400){
    let timer : ReturnType<typeof setTimeout>;
    return (arg : any) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.call(this, arg); }, timeout);
    };
  }

  searched(event : any){
      this.searchedEvent.emit(event.target.value)
  }

  delaySearch = this.debounce(this.searched)

}
