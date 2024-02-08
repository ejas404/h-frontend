import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AdminAccountComponent {

  constructor(private router : Router){}

  twoFactorAuth(val: boolean) {

  }

  logout() {
    sessionStorage.removeItem('auth_token')
    this.router.navigateByUrl('/admin/login')
  }

}
