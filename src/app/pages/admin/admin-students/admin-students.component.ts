import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DashboardActions from '../../../core/state/admin/dashboard/action';
import { getUsersList } from '../../../core/state/admin/dashboard/reducer';
import { TableHeaderModel, UserDetailsTableModel } from '../../../core/models/table.model';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmBoxHelper } from 'app/core/utils/confirm_box-helper';

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
    private confirmBox: ConfirmBoxHelper
  ) { }


  ngOnInit(): void {
<<<<<<< Updated upstream
    this.store.dispatch(DashboardActions.dashboardRequest());
    this.fetchUserList()
  }

<<<<<<< HEAD
=======
    this.fetchStudentList()
  }

  fetchStudentList() {
>>>>>>> Stashed changes
=======
  fetchUserList() {
>>>>>>> socket
    this.store.select(getUsersList)
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        this.userList = state as UserDetailsTableModel[]
      })
  }

  async deleteUser(id: string) {

    if (typeof (id) !== 'string') return;
    const check = await this.confirmBox.call('Are your sure about deleting this user')
    if (!check) return;
    this.store.dispatch(DashboardActions.deleteUser({ id ,user : 'users'}))

  }

  async blockUser(id: string) {

    if (typeof (id) !== 'string') return;
    const check = await this.confirmBox.call('Are your sure about block this user')
    if (!check) return;
    this.store.dispatch(DashboardActions.blockRequest({ user_id: id,user : 'users' }))

  }

  async unblockUser(id: string) {

    if (typeof (id) !== 'string') return;
    const check = await this.confirmBox.call('Are your sure about unblock this user')
    if (!check) return;
    this.store.dispatch(DashboardActions.unblockRequest({ user_id: id,user : 'users' }))

  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
