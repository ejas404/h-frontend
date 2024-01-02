import { Component } from '@angular/core';
import { TutorProfileService } from '../../../core/services/tutor/profile';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-request-course-popup',
  templateUrl: './request-course-popup.component.html',
  styleUrl: './request-course-popup.component.scss'
})
export class RequestCoursePopupComponent {
  constructor(
    private service : TutorProfileService,
    private store : Store,
    private messageService : MessageService
    ){}


  
  ngOnInit(): void {
    

  }

  onFormSubmit(formData : NgForm){
    this.service.requestCourse(formData.value).subscribe({
      next : data =>{
        this.successMessage()
      },
      error : err =>{
        this.failureMessage()
      }
    })
  }

  successMessage(){
    this.messageService.add({
      severity : 'success',
      summary : 'Success',
      detail : 'Course Requested Successfully'
    })
  }

  failureMessage(){
    this.messageService.add({
      severity : 'error',
      summary : 'Failed',
      detail : 'Failed to request course'
    })
  }

}
