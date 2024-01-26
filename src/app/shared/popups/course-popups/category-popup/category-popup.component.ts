import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'app/core/services/category_service';
import { ComponetCommunicationService } from 'app/core/services/shared/communicate_service';
import { ToastService } from 'app/core/services/shared/toast_service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-category-popup',
  templateUrl: './category-popup.component.html',
  providers: [CategoryService]
})
export class CategoryPopupComponent {

  private destroy$ = new Subject<void>();

  constructor(
    private categoryService: CategoryService,
    private communicateService : ComponetCommunicationService,
    private toastService : ToastService,
    @Inject(MAT_DIALOG_DATA) public data: { calledFor: string, id: string, route: string }
  ) { }
  onFormSubmit(form: NgForm) {

    if (this.data.calledFor === 'mainCategory') {
      this.categoryService.addCategory(form.value, this.data.route)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.toastService.success('category added successfully')
          this.communicateService.setAction(res.newCategory)
        },
        error : err =>{
          this.toastService.fail(err.error.message || 'failed to add category')
        }
      })
    }
    
    if(this.data.calledFor === 'subCat'){
      this.categoryService.addSubCategory(form.value, this.data.route)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next : res =>{
          this.toastService.success('subcategory added successfully')
          console.log('b4 calling set')
          this.communicateService.setAction(res.newSubCategory)
          console.log('after calling set')
        },
        error : err =>{
          this.toastService.fail(err.error.message || 'failed to add subcategory')
        }
      })
    }
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }
}
