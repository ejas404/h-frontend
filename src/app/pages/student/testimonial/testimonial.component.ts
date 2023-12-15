import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  mainUser : number = 0 ;
  userTestimonials : any[]  = [
    {
      name : 'Max', 
      message : 'something work sdfd ', 
      img : 'assets/student/faces/portrait-white-man-isolated_53876-40306.avif'
    },
    {
      name : 'Karl',
      message : '"The digital nature of e-learning allows for real-time updates and ensures that educational content remains current."',
      img:'assets/student/faces/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg'
    }
  ]

  swapUsers(elem :any){
    const id = elem.id
    alert('hai')
  }
}
