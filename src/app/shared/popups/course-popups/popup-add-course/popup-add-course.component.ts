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


@Component({
  selector: 'app-popup-add-course',
  templateUrl: './popup-add-course.component.html',
  styleUrl: './popup-add-course.component.scss',
  providers : [CategoryService]
})
export class PopupAddCourseComponent {

  private destroy$ = new Subject<void>();

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
    private messageService: MessageService,
    private dialogRef: MatDialog,
    private cropRequestService: ImageCropperService,
    private categoryService : CategoryService
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
    this.categoryService.getCategory(this.routeFor).subscribe({
      next : res =>{
        this.categoryList = res.categories
      },
      error : err =>{
        console.log(err)
      }
    })
  }

  fetchSubCategoryList(){
    this.categoryService.getSubCategory(this.routeFor).subscribe({
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
          this.store.dispatch(DashboardActions.courseAddSuccess(data))
          this.successMessage()
        },
        error: err => {
          this.failureMessage()
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
  }

  categoryChange(event : Event){
    const selectElem = event.target as HTMLSelectElement
    this.selectedCategory = selectElem.value

    this.filteredSubCat = this.subCategoryList
                              .filter(each => each.category === selectElem.value)
    
  }

  addSubCat(){
    this.dialogRef.open(CategoryPopupComponent,{
      data : {
        calledFor : 'subCat',
        route : this.routeFor,
        id : this.selectedCategory
      }
    })
  }

  successMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Course Updated Successfully'
    })
  }

  failureMessage() {
    this.messageService.add({
      severity: 'error',
      summary: 'Failed',
      detail: 'Failed to update course'
    })
  }


  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
