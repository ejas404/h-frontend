import { Component } from '@angular/core';
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
    private textMsgService: MessagTextService
  ) { }

  ngOnInit() {
    this.destroy$ = this.textMsgService.recieve().subscribe({
      next: res => {
        this.recieved.push(res)
      },
      error: err => {
        console.log('error occured ' + err)
      }
    })
  }

  send() {
    this.textMsgService.send(this.text)
    this.text = ''
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe()
  }

}
