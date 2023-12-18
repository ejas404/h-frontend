import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent {
  edit : boolean = false

  profileUpdate = new FormGroup({
    'name': new FormControl(),
    'email': new FormControl(),
    'contact': new FormControl()
  })

  onEditClick(){
    this.edit = true
  }

  updateUser(){
    this.edit = false
    console.log(this.profileUpdate.value)
  }
}
