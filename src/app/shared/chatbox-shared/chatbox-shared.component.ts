import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageModel } from 'app/core/models/chat_model';
import { MessageTextService } from 'app/core/services/message_service';
import { decodeUserToken } from 'app/core/utils/check_token';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatbox-shared',
  templateUrl: './chatbox-shared.component.html',
  styleUrl: './chatbox-shared.component.scss'
})
export class ChatboxSharedComponent {

  user_id !: string;
  oldChats : MessageModel[] = []
  text !: string
  destroy$ !: Subscription

  constructor(
    private textMsgService: MessageTextService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) { }

  ngOnInit() {
    this.getOldMessages()
    this.subReply()
  }

  getOldMessages(){
    const user = decodeUserToken()
    if(!user) return;
    this.user_id = user.userId;
    const route = user.role === 'Student'? 'student':'tutor';
    this.textMsgService.getOldMessages(this.data.id,route).subscribe({
      next : res => {
        this.oldChats = res
      }
    })   
  }

  subReply() {
    this.destroy$ = this.textMsgService.recieve().subscribe({
      next: res => {
        this.oldChats.push(res)
      },
      error: err => {
        console.log('error occured ' + err)
      }
    })
  }

  send() {
    const data = { message: this.text, receiver: this.data.id, sender : this.user_id}
    this.textMsgService.send(data)
    this.oldChats.push(data)
    this.text = ''
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe()
  }

}
