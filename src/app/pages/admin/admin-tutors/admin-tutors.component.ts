import { Component } from '@angular/core';
import * as DashboardActions from '../../../../app/core/state/admin/dashboard/action'
import { getTutorList } from '../../../core/state/admin/dashboard/reducer';
import { Store } from '@ngrx/store';
import { TutorModel } from '../../../core/models/tutor';
import { DashboardService } from '../../../core/services/admin/dashboard';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-tutors',
  templateUrl: './admin-tutors.component.html',
  styleUrl: './admin-tutors.component.scss'
})
export class AdminTutorsComponent {
  userList: TutorModel[] = []
  constructor(
    private store: Store,
    private service: DashboardService,
    private messageService: MessageService
  ) { }


  ngOnInit(): void {
    this.store.dispatch(DashboardActions.dashboardRequest());

    this.store.select(getTutorList).subscribe((state) => {
      this.userList = state
    })
  }

  deleteUser(id: string | undefined) {
    let check = confirm('are you sure about deleting this user')
    if (check && id) {
      this.service.deleteTutor(id).subscribe({
        next: data => {
          this.store.dispatch(DashboardActions.deleteTutorSuccess(data))
          this.successMessage('deleted')
        },
        error: err => {
          console.log(err)
          this.failureMessage('delete')
        }
      })
    }
  }




  blockUser(id: string | undefined) {
    if (typeof (id) === 'string') {
      this.service.blockTutor(id).subscribe({
        next: data => {
          this.store.dispatch(DashboardActions.blockTutorSuccess(data))
          this.successMessage('blocked')
        },
        error: err => {
          console.log(err)
          this.failureMessage('block')
        }
      })
    }
  }

  unblockUser(id: string | undefined) {
    if (typeof (id) === 'string') {
      this.service.unblockTutor(id).subscribe({
        next: data => {
          this.store.dispatch(DashboardActions.unblockTutorSuccess(data))
          this.successMessage('unblocked')
        },
        error: err => {
          console.log(err)
          this.failureMessage('unblock')
        }
      })
    }
  }

  successMessage(data: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `${data} tutor successfully`
    })
  }

  failureMessage(data: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Failed',
      detail: `failed to ${data} tutor`
    })
  }
}
