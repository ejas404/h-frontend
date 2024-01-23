import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DashboardService } from '../../../../core/services/admin/dashboard';
import { TutorModel } from '../../../../core/models/tutor';
import { Store } from '@ngrx/store';
import { getTutorList } from '../../../../core/state/admin/dashboard/reducer';
import * as DashboardActions from '../../../../core/state/admin/dashboard/action'
import { MessageService } from 'primeng/api';
import { CategoryModel, CourseDetailsResponse, SubCategoryModel } from '../../../../core/models/course';
import { Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ImageCropperService } from 'app/core/services/shared/image_crop_service';
import { CourseImagePopupComponent } from '../course-image-popup/course-image-popup.component';
import { CategoryPopupComponent } from '../category-popup/category-popup.component';
import { CategoryService } from 'app/core/services/category_service';
import { ToastService } from 'app/core/services/shared/toast_service';


@Component({
  selector: 'app-popup-add-course',
  templateUrl: './popup-add-course.component.html',
  providers : [CategoryService]
})
export class PopupAddCourseComponent {

  destroy$ = new Subject<void>();

  routeFor !: 'admin'| 'tutor'
  tutorList !: TutorModel[];
  categoryList !: CategoryModel[];
  subCategoryList !: SubCategoryModel[];
  filteredSubCat !: SubCategoryModel[];
  courseDetail !: CourseDetailsResponse;
  coverFile !: File;
  selectedCategory !: string;

  constructor(
    private service: DashboardService,
    private store: Store,
    private dialogRef: MatDialog,
    private cropRequestService: ImageCropperService,
    private categoryService : CategoryService,
    private toastService : ToastService
  ) { }



  ngOnInit(): void {
    this.routeFor = 'admin'
    this.fetchTutorList()
    this.fetchCategoryList()
    this.fetchSubCategoryList()
  }

  fetchTutorList() {
    this.store.dispatch(DashboardActions.dashboardRequest());

    this.store.select(getTutorList)
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        this.tutorList = state
      })
  }

  fetchCategoryList(){
    this.categoryService.getCategory(this.routeFor)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        this.categoryList = res.categories
      },
      error : err =>{
        console.log(err)
      }
    })
  }

  fetchSubCategoryList(){
    this.categoryService.getSubCategory(this.routeFor)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        console.log('sub category list', res.subCategories)
        this.subCategoryList = res.subCategories
      },
      error : err =>{
        console.log(err)
      }
    })
  }

  inputUpload(event: Event) {
    this.dialogRef.open(CourseImagePopupComponent, {
      data: {
        calledFor: 'addCourse',
        imageInput: event
      }
    })

    this.cropRequestService.isCropped
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.coverFile = data
        },
        error: err => {
          console.log('failed to crop image')
        }
      })
  }

  onFormSubmit(form: NgForm) {

    const formData = new FormData()
    formData.append('cover', this.coverFile,this.coverFile.name)
    formData.append('details', JSON.stringify(form.value))

    this.service.addCourse(formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.toastService.success('course added successfully')
          this.store.dispatch(DashboardActions.courseAddSuccess(data))
        },
        error: err => {
          this.toastService.fail(err.error.message || 'failed to add course')
        }
      })
  }

  addCategory() {
    this.dialogRef.open(CategoryPopupComponent, {
      data: {
        calledFor: 'mainCategory',
        route: this.routeFor
      }
    })

    this.categoryService.isCategoryAdded.subscribe({
      next : res =>{
        alert('category')
        console.log(res)
        console.log('category added')
      }
    })
  }

  categoryChange(event : Event){
    const selectElem = event.target as HTMLSelectElement
    this.selectedCategory = selectElem.value

    this.filteredSubCat = this.subCategoryList.filter(each => each.category === selectElem.value)
    
  }

  addSubCat(){
    this.dialogRef.open(CategoryPopupComponent,{
      data : {
        calledFor : 'subCat',
        route : this.routeFor,
        id : this.selectedCategory
      }
    })

    this.categoryService.isCategoryAdded.subscribe({
      next : res =>{
        alert('category')
        console.log(res)
        console.log('category added')
      }
    })
  }


  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
