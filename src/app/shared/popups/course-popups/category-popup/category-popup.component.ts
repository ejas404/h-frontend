import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'app/core/services/category_service';

@Component({
  selector: 'app-category-popup',
  templateUrl: './category-popup.component.html',
  styleUrl: './category-popup.component.scss',
  providers: [CategoryService]
})
export class CategoryPopupComponent {

  constructor(
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: { calledFor: string, id: string, route: string }
  ) { }
  onFormSubmit(form: NgForm) {

    if (this.data.calledFor === 'mainCategory') {
      this.categoryService.addCategory(form.value, this.data.route).subscribe({
        next: res => {
          console.log(res)
        }
      })
    }else if(this.data.calledFor === 'subCat'){
      this.categoryService.addSubCategory(form.value, this.data.route).subscribe({
        next : res =>{
          console.log(res)
        }
      })
    }
  }
}
