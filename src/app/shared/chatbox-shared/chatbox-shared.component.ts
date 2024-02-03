import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessagTextService } from 'app/core/services/message_service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatbox-shared',
  templateUrl: './chatbox-shared.component.html',
  styleUrl: './chatbox-shared.component.scss'
})
export class ChatboxSharedComponent {

  recieved: string[] = ['happy holiday guys!', 'how it hanging']

  text !: string
  destroy$ !: Subscription

  constructor(
    private textMsgService: MessagTextService,
    @Inject(MAT_DIALOG_DATA) public data : {id : string}
  ) { }

  ngOnInit() {
    this.destroy$ = this.textMsgService.recieve().subscribe({
      next: res => {
        console.log('reply',res)
        this.recieved.push(res)
        console.log(this.recieved)
      },
      error: err => {
        console.log('error occured ' + err)
      }
    })
  }

  send() {
    const data = {text : this.text, reciever : this.data.id}
    this.textMsgService.send(data)
    this.text = ''
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe()
  }

}
