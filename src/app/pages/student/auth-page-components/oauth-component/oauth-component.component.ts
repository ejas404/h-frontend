import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthSuccessResponse } from 'app/core/models/auth';
import { AuthService } from 'app/core/services/auth_service';
import { ToastService } from 'app/core/services/shared/toast_service';
import { loginSuccess } from 'app/core/state/auth/action';

@Component({
  selector: 'app-oauth-component',
  templateUrl: './oauth-component.component.html',
  styleUrl: './oauth-component.component.scss'
})
export class OauthComponentComponent {

  constructor(
    private authService : AuthService,
    private store : Store,
    private router : Router,
    private toastService : ToastService
  ){}

  ngOnInit() {
    console.log(window.location.href);
    const code = new URL(window.location.href).searchParams.get('code') as string
    this.requestAuth(code)
  }

  requestAuth(code : string){
    this.authService.getGoogleAuth(code).subscribe({
      next : res =>{
        this.store.dispatch(loginSuccess({successResponse : res as AuthSuccessResponse }))
      },
      error : err => {
        this.router.navigateByUrl('/login')
        this.toastService.fail(err.error.message || 'failed to login')
      }
    })
  }
}
