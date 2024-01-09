import { Component, Inject, OnInit } from '@angular/core';
import { TutorProfileService } from '../../core/services/tutor/profile';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { TutorModel } from '../../core/models/tutor';
import { getTutorStoreData } from '../../core/state/tutor/profile/reducer';
import { tutorTagUpdateSuccess } from '../../core/state/tutor/profile/action';
import { Subject, pipe, takeUntil } from 'rxjs';

export interface Tags {
  name: string;
}

@Component({
  selector: 'app-tags-popup-tutor',
  templateUrl: './tags-popup-tutor.component.html',
  styleUrl: './tags-popup-tutor.component.scss'
})
export class TagsPopupTutorComponent implements OnInit {

  private destroy$ = new Subject<void>();

  addOnBlur = true;
  title !: string;
  tutorData !: TutorModel;
  tutorTag: Tags[] = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(
    private service: TutorProfileService,
    private messageService: MessageService,
    private store: Store,
    private announcer: LiveAnnouncer,
    @Inject(MAT_DIALOG_DATA) public data: { tagFor: string }

  ) { }

  ngOnInit(): void {
    this.title = this.data.tagFor

    this.store.select(getTutorStoreData)
      .subscribe({
        next: data => {
          this.tutorData = data as unknown as TutorModel
          this.updateTagArray()

        }
      })
  }

  updateTagArray() {
    let s = this.data.tagFor as keyof TutorModel
    let array: string[] = this.tutorData[`${s}`] as string[]

    for (let each of array) {
      this.tutorTag.push({ name: each })
    }
  }



  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();


    if (value) {
      this.tutorTag.push({ name: value });
    }

    event.chipInput!.clear();
  }

  remove(fruit: Tags): void {
    const index = this.tutorTag.indexOf(fruit);

    if (index >= 0) {
      this.tutorTag.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: Tags, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(fruit);
      return;
    }

    const index = this.tutorTag.indexOf(fruit);
    if (index >= 0) {
      this.tutorTag[index].name = value;
    }
  }

  onSave() {

    if (this.tutorTag.length === 0) return;

    let newArr: string[] = []

    for (let each of this.tutorTag) {
      newArr.push(each.name)
    }


    let stringArr = JSON.stringify(newArr)

    let formData = {
      tag: this.data.tagFor,
      list: stringArr
    }

    this.service.updateTags(formData)
      .subscribe({
        next: (data) => {
          this.store.dispatch(tutorTagUpdateSuccess(data))

          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: data.msg
          })
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Failed',
            detail: 'failed to update tags'
          })
        }
      }
      )

  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
