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
      img: 'assets/student/faces/portrait-white-man-isolated_53876-40306.avif'
    },
    {
      name: 'Karl',
      message: '"The digital nature of e-learning allows for real-time updates and ensures that educational content remains current."',
      img: 'assets/student/faces/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg'
    },
    {
      name: 'Some',
      message: '"The digital nature of e-learning allows for real-time updates and ensures that educational content remains current."',
      img: 'assets/student/faces/young-beautiful-woman-looking-camera-trendy-girl-casual-summer-white-t-shirt-jeans-shorts-positive-female-shows-facial-emotions-funny-model-isolated-yellow.avif'
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
