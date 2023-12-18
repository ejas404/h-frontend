import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../core/models/auth';
import { Store } from '@ngrx/store';
import { getUserData } from '../../../../core/state/student/profile_page/action';
import { getStudData } from '../../../../core/state/student/profile_page/reducer';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrl: './main-profile.component.scss'
})
export class MainProfileComponent implements OnInit{

  name : string = ''
  userData$ !: UserModel ;

  constructor(private store : Store){}

  ngOnInit(): void {
    this.store.dispatch(getUserData())

    this.store.select(getStudData).subscribe((data)=>{
      this.userData$ = data as UserModel
      this.name = this.userData$?.name || ''
    })
  }
}
