import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  mainUser: number = 0;
  userTestimonials: any[] = [
    {
      name: 'Max',
      message: 'something work stuff',
      img: 'assets/student/faces/stud1.avif'
    },
    {
      name: 'Karl',
      message: '"The digital nature of e-learning allows for real-time updates and ensures that educational content remains current."',
      img: 'assets/student/faces/stud2.jpg'
    },
    {
      name: 'Some',
      message: '"The digital nature of e-learning allows for real-time updates and ensures that educational content remains current."',
      img: 'assets/student/faces/stud2.jpg'
    }
  ]



  constructor(
    private renderer: Renderer2,
    private elem: ElementRef
  ) { }

  swapUsers(id: string) {
    
    let div = this.elem.nativeElement.querySelector(`[id='${id}']`)
    let img = div.querySelector('img')

    if(img){
      this.renderer.setAttribute(img,'src',this.userTestimonials[this.mainUser].img)
      this.renderer.setAttribute(div,'id',this.mainUser.toString())
    }

    this.mainUser = Number(id)
  }
}
