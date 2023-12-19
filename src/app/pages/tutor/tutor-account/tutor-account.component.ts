import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tutor-account',
  templateUrl: './tutor-account.component.html',
  styleUrl: './tutor-account.component.scss'
})
export class TutorAccountComponent {
  resetPassword(data: NgForm){}
  logOut(){}
}
