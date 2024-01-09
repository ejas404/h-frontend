import {Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{
  user : string = 'student'

  ngOnInit(): void {
    let isLogged = sessionStorage.getItem('auth_token')

    if(isLogged){
      console.log('student token',isLogged)
      this.user = 'profile'
    }
  }
}
