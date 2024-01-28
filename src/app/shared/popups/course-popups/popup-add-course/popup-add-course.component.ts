import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DashboardService } from '../../../../core/services/admin/dashboard';
import { TutorModel } from '../../../../core/models/tutor';
import { Store } from '@ngrx/store';
import { getTutorList } from '../../../../core/state/admin/dashboard/reducer';
import * as DashboardActions from '../../../../core/state/admin/dashboard/action'
import { CategoryModel, CourseDetailsResponse, SubCategoryModel, UpcomingCourse } from '../../../../core/models/course';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ImageCropperService } from 'app/core/services/shared/image_crop_service';
import { CourseImagePopupComponent } from '../course-image-popup/course-image-popup.component';
import { CategoryPopupComponent } from '../category-popup/category-popup.component';
import { CategoryService } from 'app/core/services/category_service';
import { ToastService } from 'app/core/services/shared/toast_service';
import { DashboardCourseService } from 'app/core/services/admin/dashboard_course_service';
import { ComponetCommunicationService } from 'app/core/services/shared/communicate_service';


@Component({
  selector: 'app-popup-add-course',
  templateUrl: './popup-add-course.component.html',
  providers: [CategoryService, DashboardCourseService, DashboardService]
})
export class PopupAddCourseComponent {



  destroy$ = new Subject<void>();

  routeFor !: 'admin' | 'tutor'
  tutorList !: TutorModel[];
  categoryList !: CategoryModel[];
  subCategoryList !: SubCategoryModel[];
  filteredSubCat !: SubCategoryModel[];
  courseDetail !: CourseDetailsResponse;
  coverFile !: File;
  selectedCategory !: string;

  constructor(
    private dbcService: DashboardCourseService,
    private store: Store,
    private dialogRef: MatDialog,
    private communicateService: ComponetCommunicationService,
    private cropRequestService: ImageCropperService,
    private categoryService: CategoryService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: { calledFor: string }
  ) { }



  ngOnInit(): void {
    this.routeFor = 'admin'
    this.fetchDatas()
  }

  fetchDatas() {
    //dispatches the action to get the dashboard datas
    this.store.dispatch(DashboardActions.dashboardRequest());
    // fetching tutor datas
    this.fetchList((): Observable<TutorModel[]> => this.store.select(getTutorList), 'tutorList')
    // fetching category
    this.fetchList((): Observable<{ categories: CategoryModel[] }> => this.categoryService.getCategory(this.routeFor), 'categoryList', 'categories')
    //fetching subcategory
    this.fetchList((): Observable<{ subCategories: SubCategoryModel[] }> => this.categoryService.getSubCategory(this.routeFor), 'subCategoryList', 'subCategories')

  }

  //  fetchlist function to common subscriptions
  fetchList<T>(listFunction: () => Observable<T>, listKey: keyof PopupAddCourseComponent, resKey?: string) {
    listFunction()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (resKey) {
            this[listKey] = (res as any)[resKey]
          } else {
            this.tutorList = res as TutorModel[]
          }
        },
        error: err => {
          console.log(err, 'error printing')
        }
      })

  }

  onFormSubmit(form: NgForm) {

    const formData = new FormData()
    formData.append('cover', this.coverFile, this.coverFile.name)
    formData.append('details', JSON.stringify(form.value))

    const submitFunction : Observable<{ newCourse : CourseDetailsResponse} | {newCourse : UpcomingCourse}> = this.data.calledFor === 'upcoming' ?
      this.dbcService.addUpcoming(formData) : this.dbcService.addCourse(formData);

    submitFunction
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.toastService.success('added the course successfully')
          if (this.data.calledFor !== 'upcoming') {
            this.store.dispatch(DashboardActions.courseAddSuccess(data as {newCourse : CourseDetailsResponse}))
          }
        },
        error: err => {
          this.toastService.fail(err.error.message || 'failed to add course')
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

  addCategory() {
    this.dialogRef.open(CategoryPopupComponent, {
      data: {
        calledFor: 'mainCategory',
        route: this.routeFor
      }
    })

    this.communicateService.isDone
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.categoryList = [...this.categoryList.slice(), res]
        }
      })
  }

  categoryChange(event: Event) {
    const selectElem = event.target as HTMLSelectElement
    this.selectedCategory = selectElem.value

    this.filteredSubCat = this.subCategoryList.filter(each => each.category === selectElem.value)

  }

  addSubCat() {
    this.dialogRef.open(CategoryPopupComponent, {
      data: {
        calledFor: 'subCat',
        route: this.routeFor,
        id: this.selectedCategory
      }
    })

    this.communicateService.isDone
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.filteredSubCat = [...this.filteredSubCat.slice(), res]
          this.subCategoryList = [...this.subCategoryList.slice(), res]
        }
      })

  }


  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
