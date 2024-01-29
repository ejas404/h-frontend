import { Component, OnInit } from '@angular/core';
import { isStudentToken } from 'app/core/utils/check_token';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  user: string = 'student'

  ngOnInit(): void {
    this.user = isStudentToken() ? 'profile' : this.user;
  }
}
