import { Component } from '@angular/core';

@Component({
  selector: 'select-category-component',
  templateUrl: './select-category-component.component.html',
  styleUrl: './select-category-component.component.scss'
})
export class SelectCategoryComponentComponent {
  categoryList : {name : string, _id : string}[] = [{ name : 'some',_id : 'some_id'}]

  categorySelected(val : any){
    alert(val)
  }
}
