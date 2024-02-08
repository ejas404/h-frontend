import { Component } from '@angular/core';
import { keyString } from 'app/core/models/common_model';
import { EnrollCourseModels, EnrollSubcat } from 'app/core/models/enroll_models';
import { ToastService } from 'app/core/services/shared/toast_service';
import { StudentEnrollService } from 'app/core/services/student/student_enroll_service';
import { Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-courses-profile',
  templateUrl: './courses-profile.component.html',
  styleUrl: './courses-profile.component.scss',
  providers: [StudentEnrollService]
})
export class CoursesProfileComponent {

  destroy$ = new Subject<void>()

  titles = ['enrolled', 'not enrolled']
  selected = 'enrolled'
  starValue !: number;
  enrollList !: EnrollCourseModels[];
  viewList !: EnrollCourseModels[];
  enrollCatObj : EnrollSubcat[] = []

  constructor(
    private enrollService: StudentEnrollService,
    private toastService : ToastService
  ) { }

  select(val: string) {
    if (typeof (val) !== 'string') return;
    if(this.selected === val) return;
    this.selected = val;
    this.filterList()
  }

  ngOnInit() {
    this.fetchEnrollList()
    this.fetchEnrollCat()
  }

  fetchEnrollList() {
    this.enrollService.getEnrollList()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.enrollList = res.list
          this.filterList()
        },
        error: err => {
          console.log(err)
        }
      })
  }

  fetchEnrollCat() {
    this.enrollService.getEnrollCategory()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.enrollCatObj = res.subCatObj
        },
        error: err => {
          console.log(err)
        }
      })
  }

  filterList() {
    if (!this.enrollList || !this.enrollList[0]) return;

    if (this.selected === 'enrolled') {
      this.viewList = this.enrollList.filter(each => each.isEnrolled === true)
    } else {
      this.viewList = this.enrollList.filter(each => each.isEnrolled === false)
    }
  }

  getCatName(id: string | { name: string } | undefined) {
    if (typeof (id) !== 'string') return;
    for (let each of this.enrollCatObj) {
      if (each.subCatDetails._id === id) {
        return each.subCatDetails.name
      }
    }
    return ''
  }

  starChange(val : number,enid : string){
    if(!enid) return;
    if(val >=1 && val <=5){
      this.enrollService.rateEnrollment(val,enid)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next : res =>{
          this.toastService.success(res.msg)
        },
        error : err =>{
          this.toastService.fail(err.error.message || 'failed to rate course')
        }
      })
    }
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
