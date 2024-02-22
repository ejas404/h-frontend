import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MessageModel } from 'app/core/models/chat_model';
import { MessageTextService } from 'app/core/services/message_service';
import { checkUser, decodeUserToken } from 'app/core/utils/check_token';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { ChatImagePopupComponent } from '../popups/chat-image-popup/chat-image-popup.component';
import { ComponetCommunicationService } from 'app/core/services/shared/communicate_service';
import { ToastService } from 'app/core/services/shared/toast_service';

@Component({
  selector: 'app-chatbox-shared',
  templateUrl: './chatbox-shared.component.html',
  styleUrl: './chatbox-shared.component.scss'
})
export class ChatboxSharedComponent {

  user_id !: string;
  oldChats: MessageModel[] = []
  text !: string
  blob !: Blob | null;
  destroy$ = new Subject<void>()
  @ViewChild('messageContainer') messageContainer!: ElementRef;

  constructor(
    private textMsgService: MessageTextService,
    private dialogRef: MatDialog,
    private communicateService: ComponetCommunicationService,
    private toastService : ToastService,
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
          console.log('old chats',res)
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
          this.scrollToBottom()
        },
        error: err => {
          console.log('error occured ' + err)
        }
      })
  }

  send(event: string) {
    if (!this.text) return;
    const data = { message: this.text, receiver: this.data.id, sender: this.user_id, contentType: "TEXT" as "TEXT" }
    this.textMsgService.send(data, event)
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
    if(!this.blob) return;
    const blob = this.blob
    const file = new File([blob], `${this.user_id}-${Date.now()}.jpg`, { type: blob.type })
    const uploadForm = new FormData()
    const chatDetails = {receiver : this.data.id}
    uploadForm.append('image', file, file.name)
    uploadForm.append('chat', JSON.stringify(chatDetails));

    const route = checkUser()
    this.textMsgService.sendImage(uploadForm,route)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        if(!res.success) this.toastService.fail('failed to send image try later');
        this.toastService.success(res.success)
        this.blob = null;
        this.oldChats.push(res.newChat)
      },
      error : err =>{
        console.log(err)
        this.blob = null;
        this.toastService.fail('failed to send image try later');
      }
    }) 
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
