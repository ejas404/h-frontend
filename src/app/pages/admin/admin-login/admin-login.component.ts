
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { adminLoginReq } from '../../../core/state/auth/action';
import { LoginCredential } from '../../../core/models/auth';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent implements OnInit{


  constructor(private store : Store){}
  ngOnInit(): void {
   
  }

  onSubmitClick(form : NgForm){

    let credentials : LoginCredential = form.value
    this.store.dispatch(adminLoginReq({credentials}))
  }
  
}
