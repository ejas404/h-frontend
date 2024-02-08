import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PieChartResModel } from 'app/core/models/chart_model';
import { PopularCourseModel } from 'app/core/models/dashboard_model';
import { CourseDetailsTableModel, UserDetailsTableModel } from 'app/core/models/table.model';
import { DashboardSalesService } from 'app/core/services/admin/dashboard_sales_service';
import { getCourseList, getTutorList, getUsersList } from 'app/core/state/admin/dashboard/reducer';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
  providers: [DashboardSalesService]
})
export class AdminDashboardComponent {

  destroy$ = new Subject<void>()
  userList !: UserDetailsTableModel[];
  tutorList !: UserDetailsTableModel[];
  courseList !: CourseDetailsTableModel[];
  popularCourseList: PopularCourseModel[] = []
  students !: number;
  tutors !: number;
  courses !: number;
  pieChartList !: PieChartResModel
  num !: number;

  constructor(
    private store: Store,
    private salesService: DashboardSalesService
  ) { }

  ngOnInit() {

    this.fetchStudentList()
    this.fetchTutorList()
    this.fetchCourseList()
    this.getPopularCourses()
    this.fetchChartDetails()
  }



  fetchStudentList() {
    this.store.select(getUsersList)
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        this.userList = state as UserDetailsTableModel[]
        this.students = this.userList.filter(each => !each.isBlocked).length
      })
  }

  fetchTutorList() {
    this.store.select(getTutorList)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (state) => {
          this.tutorList = state as UserDetailsTableModel[]
          this.tutors = this.tutorList.filter(each => !each.isBlocked).length
        }
      })
  }

  fetchCourseList() {
    this.store.select(getCourseList)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.courseList = data.courseDetails as CourseDetailsTableModel[];
          this.courses = this.courseList.length
        },
        error: err => {
          console.log(err)
        }
      })
  }


  getPopularCourses() {
    this.salesService.getPopularCourses().subscribe({
      next: res => {
        this.popularCourseList = res.popularCourses
      }
    })
  }


  fetchChartDetails(){
    this.salesService.getChartDetails().subscribe({
      next: res => {
       this.pieChartList = res.pieChart
       this.num = 4
       console.log('response came')
      }
    })
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }


}
