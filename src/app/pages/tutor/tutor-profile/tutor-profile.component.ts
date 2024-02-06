import { Component, OnInit } from '@angular/core';
import { TutorPopupComponent } from '../../../shared/popups/tutor-popup/tutor-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { tutorEducationDeleteSuccess } from '../../../core/state/tutor/profile/action';
import { getTutorStoreData } from '../../../core/state/tutor/profile/reducer';
import { TutorEducation } from '../../../core/models/tutor';
import { TutorProfileService } from '../../../core/services/tutor/profile';
import { MessageService } from 'primeng/api';
import { ConfirmBoxService } from '../../../core/services/shared/confirm-dialog';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmDialogModel } from 'app/shared/popups/confirm-box/confirm-box.component';
import { ConfirmBoxHelper } from 'app/core/utils/confirm_box-helper';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrl: './tutor-profile.component.scss'
})
export class TutorProfileComponent  {

  private destroy$ = new Subject<void>();


  constructor(

  ) { }


}
