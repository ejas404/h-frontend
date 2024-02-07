import { Component, OnInit } from '@angular/core';
import { getTutorData } from '../../../core/state/tutor/profile/action';
import { Store } from '@ngrx/store';
import { TutorProfileService } from '../../../core/services/tutor/profile';
import { TutorModel } from '../../../core/models/tutor';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ToastService } from 'app/core/services/shared/toast_service';
import { MessageTextService } from 'app/core/services/message_service';
import { RequestCoursePopupComponent } from 'app/shared/popups/course-popups/request-course-popup/request-course-popup.component';

@Component({
  selector: 'app-tutor-profile-page',
  templateUrl: './tutor-profile-page.component.html',
  styleUrl: './tutor-profile-page.component.scss',
  providers: [TutorProfileService]
})
export class TutorProfilePageComponent implements OnInit {

  private destroy$ = new Subject<void>();
  tutorData !: TutorModel;

  constructor(
    private store: Store,
    private toastService: ToastService,
    private messageService : MessageTextService,
    private dialogRef : MatDialog
  ) { }



  ngOnInit(): void {
    // establish connection on socket
    this.listenToMessages()
    //fetches data to the store
    this.store.dispatch(getTutorData())
    //fetches tutor profile details
    // this.getData()
  }

  requestCourse(){
    this.dialogRef.open(RequestCoursePopupComponent)
  }


 
  listenToMessages(){
    this.messageService.recieve()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        this.toastService.success('you have a text message')
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
