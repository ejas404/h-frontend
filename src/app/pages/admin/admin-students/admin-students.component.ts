import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DashboardActions from '../../../core/state/admin/dashboard/action';
import { getUsersList } from '../../../core/state/admin/dashboard/reducer';
import { ConfirmBoxService } from '../../../core/services/shared/confirm-dialog';
import { TableHeaderModel, UserDetailsTableModel } from '../../../core/models/table.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrl: './admin-students.component.scss'
})
export class AdminStudentsComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();


  tableHeaders: TableHeaderModel[] = [
    { title: 'Name', tBodyKey: 'name' },
    { title: 'Email', tBodyKey: 'email' },
    { title: 'Restrict', tBodyKey: 'restrict' },
    { title: 'Delete', tBodyKey: 'delete' }
  ]
  userList !: UserDetailsTableModel[];

  constructor(
    private store: Store,
    private confirmService: ConfirmBoxService
  ) { }
  

  ngOnInit(): void {
    this.store.dispatch(DashboardActions.dashboardRequest());

    this.store.select(getUsersList).subscribe((state) => {
      this.userList = state as UserDetailsTableModel[]
    })
  }

  deleteUser(id: string) {
    if (id) {
      this.confirmService
        .confirmDialog('Are your sure about deleting the user')
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: data => {
            if (data) {
              this.store.dispatch(DashboardActions.deleteUser({ id }))
            }
          }
        })
    }
  }




  blockUser(id: string) {
    if (id) {
      this.confirmService
        .confirmDialog('Are your sure about block this user')
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: data => {
            if (data) {
              this.store.dispatch(DashboardActions.blockRequest({ user_id: id }))
            }
          }
        })
    }
  }

  unblockUser(id: string) {
    if (id) {
      this.confirmService
        .confirmDialog('Are your sure about unblock this user')
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: data => {
            if (data) {
              this.store.dispatch(DashboardActions.unblockRequest({ user_id: id }))
            }
          }
        })
    }
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

}
