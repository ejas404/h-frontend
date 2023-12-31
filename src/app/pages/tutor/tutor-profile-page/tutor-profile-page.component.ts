import { Component, OnInit } from '@angular/core';
import { getTutorData } from '../../../core/state/tutor/profile/action';
import { Store } from '@ngrx/store';
import { getTutorStoreData } from '../../../core/state/tutor/profile/reducer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TutorProfileService } from '../../../core/services/tutor/profile';
import { StudentUpdateModel } from '../../../core/models/student';
import { titleCase } from 'title-case';
import { TutorModel } from '../../../core/models/tutor';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../../shared/popup/popup.component';
import { BASE_URL } from '../../../core/constant/uri';
import { TagsPopupTutorComponent } from '../../../shared/tags-popup-tutor/tags-popup-tutor.component';

@Component({
  selector: 'app-tutor-profile-page',
  templateUrl: './tutor-profile-page.component.html',
  styleUrl: './tutor-profile-page.component.scss'
})
export class TutorProfilePageComponent implements OnInit{
  tutorData !: TutorModel ;
  edit : boolean = false;
  profileUrl !: string ;

  constructor(
    private store : Store , 
    private service : TutorProfileService,
    private dialogRef : MatDialog
    ){}

  profileUpdate = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'contact': new FormControl('',[Validators.pattern(/^\d{10}$/)])
  })


  ngOnInit(): void {
    this.store.dispatch(getTutorData())

    this.store.select(getTutorStoreData).subscribe((data)=>{
      this.tutorData = data as unknown as TutorModel
      this.setFormValues()
      this.setProfileImage()
    })

  }

  setFormValues() {
    
    // converting the name into title case
    let name : string = titleCase(this.tutorData?.name as string)

    this.profileUpdate.patchValue({
      'name': name,
      'email': this.tutorData?.email,
      'contact': this.tutorData?.contact
    });
  }

  setProfileImage(){
    console.log('tutor data profile url', this.tutorData)
   
    if (this.tutorData?.profile) {
      this.profileUrl = `${BASE_URL}/${this.tutorData.profile?.slice(7)}`      
    }else{
      this.profileUrl =  '../../../../../assets/student/fixed-images/634682.png'
    }
  }

  onEditClick(){
    this.edit = true
  }

  cancelEdit(){
    this.edit = false
  }

  updateUser(){
    this.edit = false
    let userData : StudentUpdateModel = this.profileUpdate.value as StudentUpdateModel
    this.service.updateProfile(userData).subscribe((res)=>{
      console.log(res)
    })
  }

  editProfImage(){
    this.dialogRef.open(PopupComponent,{
      data : {calledFor : 'tutor'}
    })
  }

  editTag(data : string){
    this.dialogRef.open(TagsPopupTutorComponent,{
      data : {tagFor : data}
    })
  }
}
