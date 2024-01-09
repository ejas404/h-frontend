import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseDetailsTableModel, DropdownFilterModel, TableHeaderModel, UserDetailsTableModel } from '../../core/models/table.model';
import { CourseDetailsResponse } from '../../core/models/course';

@Component({
  selector: 'admin-table',
  templateUrl: './tables.component.html'
})
export class TablesReusableComponent {
  
  @Input() tHeaders : TableHeaderModel [] = []
  @Input() tBody : Array <UserDetailsTableModel | CourseDetailsTableModel> = []
  @Input() dropFilterList : Array<DropdownFilterModel> = []
  @Input() tutorNames : string[] = []
  @Output() addEvent = new  EventEmitter()
  @Output() delete = new EventEmitter()
  @Output() block = new EventEmitter()
  @Output() unblock = new EventEmitter()
  @Output() filter = new EventEmitter()

  
  blockEvent(id:string | undefined){
    if(typeof(id) === 'string'){ this.block.emit(id) }
  }
  unblockEvent(id:string | undefined){
    if(typeof(id) === 'string'){ this.unblock.emit(id) }
  }
  deleteEvent(id:string | undefined){
    if(typeof(id) === 'string'){ this.delete.emit(id) }
  }

  onFilter(data : string){
    this.filter.emit(data)
  }

  addEventEmitted(){
     this.addEvent.emit(null)
  }
}
