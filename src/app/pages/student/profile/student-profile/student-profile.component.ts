import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../../../core/models/auth';
import { Store } from '@ngrx/store';
import { getStudData } from '../../../../core/state/student/profile_page/reducer';
import { StudentProfileService } from '../../../../core/services/student/profile';
import { StudentUpdateModel } from '../../../../core/models/student';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent implements OnInit{
  edit : boolean = false
  userData$ !: UserModel 

  profileUpdate = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'contact': new FormControl('',[Validators.pattern(/^\d{10}$/)])
  })

  constructor(private store : Store ,private service : StudentProfileService){}

  ngOnInit(): void {
    this.store.select(getStudData).subscribe((data) => {
      this.userData$ = data as UserModel;
      this.setFormValues();
    });
  }

  setFormValues() {
    // Using patchValue to update only the provided form controls
    this.profileUpdate.patchValue({
      'name': this.userData$?.name,
      'email': this.userData$?.email,
      'contact': this.userData$?.contact
    });
  }


  onEditClick(){
    this.edit = true
  }

  updateUser(){
    this.edit = false
    let userData : StudentUpdateModel = this.profileUpdate.value as StudentUpdateModel
    this.service.updateProfile(userData).subscribe((res)=>{
      console.log(res)
    })
  }
}
