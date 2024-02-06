import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CourseDetailsTableModel, UserDetailsTableModel } from 'app/core/models/table.model';
import { getCourseList, getTutorList, getUsersList } from 'app/core/state/admin/dashboard/reducer';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  destroy$ = new Subject()
  userList !: UserDetailsTableModel[];
  tutorList !: UserDetailsTableModel[];
  courseList !: CourseDetailsTableModel[];
  students !: number;
  tutors !: number;
  courses !: number;

  constructor(private store: Store) { }

  ngOnInit() {

    this.fetchStudentList()
    this.fetchTutorList()
    this.fetchCourseList()

    this.students = this.userList.filter(each => !each.isBlocked).length
    this.tutors = this.tutorList.filter(each => !each.isBlocked).length
    this.courses = this.courseList.length

  }



  fetchStudentList() {
    this.store.select(getUsersList)
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        this.userList = state as UserDetailsTableModel[]
      })
  }

  fetchTutorList() {
    this.store.select(getTutorList)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (state) => {
          this.tutorList = state as UserDetailsTableModel[]
        }
      })
  }

  fetchCourseList() {
    this.store.select(getCourseList)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.courseList = data.courseDetails as CourseDetailsTableModel[];
        },
        error: err => {
          console.log(err)
        }
      })
  }



}
