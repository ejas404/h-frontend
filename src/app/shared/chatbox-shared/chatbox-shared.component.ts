import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MessageModel } from 'app/core/models/chat_model';
import { MessageTextService } from 'app/core/services/message_service';
import { decodeUserToken } from 'app/core/utils/check_token';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { ChatImagePopupComponent } from '../popups/chat-image-popup/chat-image-popup.component';
import { ComponetCommunicationService } from 'app/core/services/shared/communicate_service';

@Component({
  selector: 'app-chatbox-shared',
  templateUrl: './chatbox-shared.component.html',
  styleUrl: './chatbox-shared.component.scss'
})
export class ChatboxSharedComponent {

  user_id !: string;
  oldChats: MessageModel[] = []
  text !: string
  blob !: Blob;
  destroy$ = new Subject<void>()
  @ViewChild('messageContainer') messageContainer!: ElementRef;

  constructor(
    private textMsgService: MessageTextService,
    private dialogRef: MatDialog,
    private communicateService: ComponetCommunicationService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) { }

  ngOnInit() {
    this.getOldMessages()
    this.subReply()
  }

  getOldMessages() {
    const user = decodeUserToken()
    if (!user) return;
    this.user_id = user.userId;
    const route = user.role === 'Student' ? 'student' : 'tutor';
    this.textMsgService.getOldMessages(this.data.id, route)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.oldChats = res
        }
      })
  }

  subReply() {
    this.textMsgService.recieve()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.oldChats.push(res)
        },
        error: err => {
          console.log('error occured ' + err)
        }
      })
  }

  send(event: string) {
    if (!this.text) return;
    const data = { message: this.text, receiver: this.data.id, sender: this.user_id, contentType: "IMAGE" as "IMAGE" }
    // this.textMsgService.send(data, event)
    this.oldChats.push(data)
    this.scrollToBottom()
    this.text = ''
  }

  imageSelect() {
    this.dialogRef.open(ChatImagePopupComponent, {
      width: '400px',
      height: '400px'
    })

    this.communicateService.isDone
      .pipe(take(1))
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (res.called !== 'chat') return;
          this.blob = res.data
        }
      })
  }

  imageSend() {
    const blob = this.blob
    const file = new File([blob], `${this.user_id}-${Date.now()}.jpg`, { type: blob.type })
    const uploadForm = new FormData()
    uploadForm.append('chat_image', file, file.name)
  }



  scrollToBottom(): void {
    setTimeout(() => {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight ;
    }, 100);
    
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
