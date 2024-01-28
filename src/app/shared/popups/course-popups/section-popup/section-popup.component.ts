import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from 'app/core/services/course_service';
import { ComponetCommunicationService } from 'app/core/services/shared/communicate_service';
import { ToastService } from 'app/core/services/shared/toast_service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-section-popup',
  templateUrl: './section-popup.component.html',
  styleUrl: './section-popup.component.scss'
})
export class SectionPopupComponent {

  course_id: string = ""

  private destroy$ = new Subject<void>()

  constructor(
    private courseService: CourseService,
    private toastService: ToastService,
    private communicateService : ComponetCommunicationService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) { }

  ngOnInIt() {
    this.course_id = this.data.id
  }

  onFormSubmit(form: NgForm) {
    this.courseService.addSection(form.value, 'admin')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.toastService.success(res.msg)
          this.communicateService.setAction(res.newSection)
        },
        error: err => {
          this.toastService.fail(err.error.message)
        }
      })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
