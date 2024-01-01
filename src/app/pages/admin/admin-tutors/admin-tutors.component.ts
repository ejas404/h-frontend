import { Component } from '@angular/core';
import * as DashboardActions from '../../../../app/core/state/admin/dashboard/action' 
import { getTutorList } from '../../../core/state/admin/dashboard/reducer';
import { Store } from '@ngrx/store';
import { TutorModel } from '../../../core/models/tutor';

@Component({
  selector: 'app-admin-tutors',
  templateUrl: './admin-tutors.component.html',
  styleUrl: './admin-tutors.component.scss'
})
export class AdminTutorsComponent {
  userList : TutorModel[] = []
  constructor(private store: Store) { }


  ngOnInit(): void {
    this.store.dispatch(DashboardActions.dashboardRequest());

    this.store.select(getTutorList).subscribe((state) => {
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
