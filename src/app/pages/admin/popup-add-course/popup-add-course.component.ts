import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DashboardService } from '../../../core/services/admin/dashboard';
import { TutorModel } from '../../../core/models/tutor';
import { Store } from '@ngrx/store';
import { getTutorList } from '../../../core/state/admin/dashboard/reducer';
import * as DashboardActions from '../../../../app/core/state/admin/dashboard/action' 

@Component({
  selector: 'app-popup-add-course',
  templateUrl: './popup-add-course.component.html',
  styleUrl: './popup-add-course.component.scss'
})
export class PopupAddCourseComponent {

  tutorList !: TutorModel[];

  constructor(
    private service : DashboardService,
    private store : Store
    ){}


  
  ngOnInit(): void {
    this.store.dispatch(DashboardActions.dashboardRequest());

    this.store.select(getTutorList).subscribe((state) => {
      this.tutorList = state
      console.log('tutuor list printed',this.tutorList)
    })
  }

  onFormSubmit(formData : NgForm){
    this.service.addCourse(formData.value).subscribe({
      next : data =>{
        console.log('success response', data)
      },
      error : err =>{
        console.log('error response from the server', err)
      }
    })
  }

}
