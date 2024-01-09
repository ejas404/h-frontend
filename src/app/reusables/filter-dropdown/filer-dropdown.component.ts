import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DropdownFilterModel } from "../../core/models/table.model";

@Component({
    selector: 'dropdown-filter',
    template: `  <select id="countries" #selectTutor (change)="onChange(selectTutor.value)"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                children:cursor-pointer cursor-pointer">
                <option selected value="all" >All</option>
                <option *ngFor="let each of dropList" value="{{each.value}}" >{{each.text}}</option>
            </select>`
})

export class DropdownFilterReusableComponent {

    @Input() dropList !: DropdownFilterModel [] ; 
    @Output() change = new EventEmitter()

    onChange (value : string){
        this.change.emit(value)
    }
}