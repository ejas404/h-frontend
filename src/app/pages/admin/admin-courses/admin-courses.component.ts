import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAddCourseComponent } from '../../../shared/popups/course-popups/popup-add-course/popup-add-course.component';
import { TutorDetailsWithCourse } from '../../../core/models/course';
import { Store } from '@ngrx/store';
import { getCourseList } from '../../../core/state/admin/dashboard/reducer';
import { CourseDetailsTableModel, DropdownFilterModel, TableHeaderModel } from '../../../core/models/table.model';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrl: './admin-courses.component.scss',
})
export class AdminCoursesComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  courseList !: CourseDetailsTableModel[];
  courseListStore !: CourseDetailsTableModel[];
  tutorCourse !: DropdownFilterModel[];
  tutorNameList: string[] = []
  tableHeaders: TableHeaderModel[] = [
    { title: 'Course', tBodyKey: 'title' },
    { title: 'filter', tBodyKey: 'tutor' },
    { title: 'add', tBodyKey: 'courseLink' }
  ]

  constructor(
    private dialogRef: MatDialog,
    private store: Store
  ) { }

  ngOnInit() {
    this.setCourseData()
  }

  setCourseData() {
    this.store.select(getCourseList)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: data => {
        this.courseList = data.courseDetails as CourseDetailsTableModel[];
        this.courseListStore = data.courseDetails as CourseDetailsTableModel[];
        this.convertFilterKeys(data.tutorCourses)
        this.setTutorList()
      },
      error: err => {
        console.log(err)
      }
    })
  }


  filterCourse(id: string) {

    if (typeof (id) !== 'string') return;
    if (id === 'all') {
      this.courseList = this.courseListStore;
      return
    }

    let array = this.courseListStore.slice()
    array = array.filter(each => each.tutor._id === id)
    this.courseList = array as CourseDetailsTableModel[]
    this.setTutorList()
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
    this.dialogRef.open(PopupAddCourseComponent, {
      data: {
        calledFor: 'courseAdd'
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
