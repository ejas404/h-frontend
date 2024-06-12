import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'reusable-signup-template',
  templateUrl: './signup-reusable-temp.component.html',
  styleUrl: './signup-reusable-temp.component.scss'
})
export class SignupReusableTempComponent {

  bg : string = ''
  hide = true;

  @Input()usedFor !: string
  @Output()submitEvent = new EventEmitter()

  ngOnInit(){
    if(this.usedFor === 'student'){
      this.bg = 'bg-primary'
    }
    
    if(this.usedFor === 'tutor'){
      this.bg = 'bg-tutor-primary'
    }

  }

  toggleEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
    event.preventDefault()
  }


  onSubmitClick(form : NgForm){
    this.submitEvent.emit(form)
  }
}
