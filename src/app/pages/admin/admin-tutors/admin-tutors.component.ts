import { Component, OnDestroy, OnInit } from '@angular/core';
import * as DashboardActions from '../../../../app/core/state/admin/dashboard/action'
import { getTutorList } from '../../../core/state/admin/dashboard/reducer';
import { Store } from '@ngrx/store';
import { TutorModel } from '../../../core/models/tutor';
import { DashboardService } from '../../../core/services/admin/dashboard';
import { MessageService } from 'primeng/api';
import { ConfirmBoxService } from '../../../core/services/shared/confirm-dialog';
import { TableHeaderModel, UserDetailsTableModel } from '../../../core/models/table.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-tutors',
  templateUrl: './admin-tutors.component.html',
  styleUrl: './admin-tutors.component.scss'
})
export class AdminTutorsComponent implements OnDestroy, OnInit {

  private destroy$ = new Subject<void>();

  userList: UserDetailsTableModel[] = []
  tableHeaders: TableHeaderModel[] = [
    { title: 'Name', tBodyKey: 'name' },
    { title: 'Email', tBodyKey: 'email' },
    { title: 'Restrict', tBodyKey: 'restrict' },
    { title: 'Delete', tBodyKey: 'delete' }
  ]

  constructor(
    private store: Store,
    private service: DashboardService,
    private messageService: MessageService,
    private confirmService: ConfirmBoxService
  ) { }


  ngOnInit(): void {
    this.fetchTutorList()
  }

  fetchTutorList() {
    this.store.select(getTutorList)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (state) => {
          this.userList = state as UserDetailsTableModel[]
        }
      })
  }

<<<<<<< Updated upstream
  deleteUser(id: string | undefined) {
    if (id) {
      this.confirmService
        .confirmDialog('Are your sure about deleting the tutor')
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: data => {
            if (data) {
              this.service.deleteTutor(id)
              .pipe(takeUntil(this.destroy$))
              .subscribe({
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
        })
=======
  async deleteUser(id: string) {

    if (typeof (id) !== 'string') return;
    const check = await this.confirmBox.call('Are your sure about deleting this tutor')
    if (!check) return;
    this.store.dispatch(DashboardActions.deleteUser({ id, user: 'tutors' }))
>>>>>>> Stashed changes

    }
  }


<<<<<<< Updated upstream
=======
    if (typeof (id) !== 'string') return;
    const check = await this.confirmBox.call('Are your sure about block this tutor')
    if (!check) return;
    this.store.dispatch(DashboardActions.blockRequest({ user_id: id, user: 'tutors' }))
>>>>>>> Stashed changes


  blockUser(id: string | undefined) {
    if (typeof (id) === 'string') {
      this.confirmService
        .confirmDialog('Are your sure about blocking the tutor')
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: data => {
            if (data) {
              this.service.blockTutor(id)
              .pipe(takeUntil(this.destroy$))
              .subscribe({
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
        }
        )
    }
  }

  unblockUser(id: string | undefined) {
    if (typeof (id) === 'string') {
      this.confirmService
      .confirmDialog('Are your sure about unblocking the tutor')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          if (data) {
            this.service.unblockTutor(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
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
      })    
    }
  }

<<<<<<< Updated upstream
  successMessage(data: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `${data} tutor successfully`
    })
  }
=======
    if (typeof (id) !== 'string') return;
    const check = await this.confirmBox.call('Are your sure about unblock this tutor')
    if (!check) return;
    this.store.dispatch(DashboardActions.unblockRequest({ user_id: id, user: 'tutors' }))
>>>>>>> Stashed changes

  failureMessage(data: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Failed',
      detail: `failed to ${data} tutor`
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
