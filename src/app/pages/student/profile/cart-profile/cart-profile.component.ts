import { Component } from '@angular/core';
import { CartModel } from 'app/core/models/cart_model';
import { StudentCourseService } from 'app/core/services/student/student_course_service';

@Component({
  selector: 'app-cart-profile',
  templateUrl: './cart-profile.component.html',
  styleUrl: './cart-profile.component.scss',
  providers : [StudentCourseService]
})
export class CartProfileComponent {

  cartDetails !: CartModel[]

  constructor(
   private studentCourseService : StudentCourseService
  ){}

  ngOnInit(){
    this.studentCourseService.getCartData().subscribe({
      next : res => {
        this.cartDetails = res.cartItems
        console.log('cart items', this.cartDetails)
      }
    })
  }
}
