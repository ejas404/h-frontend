import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAddCourseComponent } from '../../../shared/popups/course-popups/popup-add-course/popup-add-course.component';
import { DashboardService } from '../../../core/services/admin/dashboard';
import { TutorDetailsWithCourse } from '../../../core/models/course';
import { Store } from '@ngrx/store';
import { courseDetailsSuccess } from '../../../core/state/admin/dashboard/action';
import { getCourseList } from '../../../core/state/admin/dashboard/reducer';
import { CourseDetailsTableModel, DropdownFilterModel, TableHeaderModel } from '../../../core/models/table.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrl: './admin-courses.component.scss'
})
export class AdminCoursesComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  courseList !: CourseDetailsTableModel[];
  tutorCourse !: DropdownFilterModel[];
  tutorNameList: string[] = []
  tableHeaders: TableHeaderModel[] = [
    { title: 'Course', tBodyKey: 'title' },
    { title: 'filter', tBodyKey: 'tutor' },
    { title: 'restrict', tBodyKey: 'restrict' },
    { title: 'add', tBodyKey: 'courseLink' }
  ]

  constructor(
    private dialogRef: MatDialog,
    private service: DashboardService,
    private store: Store
  ) { }

  ngOnInit() {
    this.fetchCourseData()
    this.setCourseData()
  }

  fetchCourseData() {
    this.service.getCourses()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: data => {
        this.store.dispatch(courseDetailsSuccess({ successResponse: data }))
      },
      error: err => {
        console.log(err)
      }
    })
  }

  setCourseData() {
    this.store.select(getCourseList).subscribe({
      next: data => {
        this.courseList = data.courseDetails as CourseDetailsTableModel[];
        this.convertFilterKeys(data.tutorCourses)
        this.setTutorList()
      },
      error: err => {
        console.log(err)
      }
    })
  }


  filterCourse(id: string) {

    if (typeof (id) === 'string') {
      if (id === 'all') {
        this.setCourseData()
        return
      }

      this.store.select(getCourseList)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          let array = data.courseDetails.slice()
          array = array.filter(each => each.tutor._id === id)
          this.courseList = array as CourseDetailsTableModel[]
          this.setTutorList()
        }
      })
    }

  }

  convertFilterKeys(list: TutorDetailsWithCourse[]) {
    this.tutorCourse = list.map((each) => {
      return {
        value: each._id,
        text: each.name
      }
    })

  }

  setTutorList() {
    const array = []
    for (let each of this.courseList) {
      array.push(each.tutor.name)
      this.tutorNameList = array 
    }
  }

  addCourse() {
    this.dialogRef.open(PopupAddCourseComponent)
  }
  deleteCourse(arg0: any) {

  }
  blockCourse(arg0: any) {

  }
  unblockCourse(arg0: any) {

  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

}
