import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DashboardActions from '../../../core/state/admin/dashboard/action';
import { Subject, takeUntil } from 'rxjs';
import { DashboardCourseService } from 'app/core/services/admin/dashboard_course_service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
  providers : [DashboardCourseService]
})
export class AdminPageComponent {

  destroy$ = new Subject<void>()

  constructor(
    private store : Store,
    private service: DashboardCourseService,
  ){}
  ngOnInit(){
    this.store.dispatch(DashboardActions.dashboardRequest());
    this.fetchCourseData()
  }

  // fetches course details from the server and stores to the global state
  fetchCourseData() {
    this.service.getCourses()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: data => {
        this.store.dispatch(DashboardActions.courseDetailsSuccess({ successResponse: data }))
      },
      error: err => {
        console.log(err)
      }
    })
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }


}
