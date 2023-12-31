import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserModel } from '../../../core/models/auth';
import { Store } from '@ngrx/store';
import * as DashboardActions from '../../../core/state/admin/dashboard/action';
import { getUsersList } from '../../../core/state/admin/dashboard/reducer';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrl: './admin-students.component.scss'
})
export class AdminStudentsComponent implements OnInit{
  userList !: UserModel[];

  constructor(private store: Store) { }


  ngOnInit(): void {
    this.store.dispatch(DashboardActions.dashboardRequest());

    this.store.select(getUsersList).subscribe((state) => {
      this.userList = state
    })
  }

  deleteUser(id: string | undefined) {
    let check = confirm('are you sure about deleting this user')
    if( check && id){
      this.store.dispatch(DashboardActions.deleteUser({id}))
    }
  }

  


  blockUser(id : string | undefined){
    if(id){
      this.store.dispatch(DashboardActions.blockRequest({user_id : id}))
    }
  }

  unblockUser(id : string | undefined){
    if(id){
      this.store.dispatch(DashboardActions.unblockRequest({user_id : id}))
    }
  }
}
