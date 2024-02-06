import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DashboardActions from '../../../core/state/admin/dashboard/action';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
  constructor(
    private store : Store
  ){}
  ngOnInit(){
    this.store.dispatch(DashboardActions.dashboardRequest());
  }
}
