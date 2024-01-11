import { Component } from '@angular/core';
import { ToastService } from 'app/core/services/shared/toast_service';

@Component({
  selector: 'app-video-upload-popup',
  templateUrl: './video-upload-popup.component.html',
  styleUrl: './video-upload-popup.component.scss'
})
export class VideoUploadPopupComponent {

  constructor(private toast : ToastService){}

  url !: ArrayBuffer | string | null;
  isVideo !: boolean;

  onAddedEvent(event : Event){
    const input = event.target as HTMLInputElement
    this.isVideo = false

    if(!input.files?.length) return ;

    const reader = new FileReader
    const file = input.files[0]

    if(file.size > 20000) {
      this.toast.fail('maximum 20 mb is allowed','max size limited')
      return
    }

    reader.readAsDataURL(file)

    if(file.type.indexOf('video') <= -1) return;

    this.isVideo = true

    reader.onload = e =>{
      this.url = (<FileReader>e.target).result
    }

  }
}
