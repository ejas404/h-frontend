import { Component } from '@angular/core';
import { ComponetCommunicationService } from 'app/core/services/shared/communicate_service';
import { ToastService } from 'app/core/services/shared/toast_service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-chat-image-popup',
  templateUrl: './chat-image-popup.component.html',
  styleUrl: './chat-image-popup.component.scss'
})
export class ChatImagePopupComponent {


  inputEvent !: Event;
  cropResponse !: ImageCroppedEvent;
  name !: string;
  cropPreview: any;
  button: boolean = false

  constructor(
    private toastService: ToastService,
    private communicate : ComponetCommunicationService
  ) { }

  inputUpload(event: any) {
    this.inputEvent = event

    let input = event.target
    this.name = input.files[0].name
  }

  imageCropped(e: ImageCroppedEvent) {
    this.button = false
    this.cropResponse = e
    this.cropPreview = e.objectUrl
  }

  loadImageFailed() {
    this.button = true
    this.toastService.fail('Image failed to load')
  }

  selectImage() {
    const blob: any = this.cropResponse.blob
    this.communicate.setAction(blob,'chat')
  }


}
