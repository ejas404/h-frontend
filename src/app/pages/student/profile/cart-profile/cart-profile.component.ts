import { Component } from '@angular/core';
import { CartModel } from 'app/core/models/cart_model';
import { ToastService } from 'app/core/services/shared/toast_service';
import { StudentCourseService } from 'app/core/services/student/student_course_service';

@Component({
  selector: 'app-cart-profile',
  templateUrl: './cart-profile.component.html',
  styleUrl: './cart-profile.component.scss',
  providers: [StudentCourseService]
})
export class CartProfileComponent {

  cartDetails !: CartModel[]
  subTotal !: number;
  checkOutDisable = true

  constructor(
    private studentCourseService: StudentCourseService,
    private toastService : ToastService
  ) { }

  ngOnInit() {
    this.studentCourseService.getCartData().subscribe({
      next: res => {
        this.cartDetails = res.cartItems
        this.subTotal = res.cartTotal

        if(this.cartDetails){
          this.checkOutDisable = false
        }
      }
    })
  }

  removeItemClicked(id: string) {
    this.removeItem(id)
    this.removeFromCart(id)
  }

  removeItem(id: string) {
    if (typeof (id) !== 'string') return;
    this.cartDetails = this.cartDetails.filter((each): CartModel | void => {
      if (each.course_id === id) {
        this.subTotal = this.subTotal - each.details[0].fee
      } else {
        return each
      }
    })

    if(!this.cartDetails.length){
      this.checkOutDisable = true
    }
  }

  removeFromCart(id : string){
    this.studentCourseService.removeFromCart(id).subscribe({
      next : res =>{
        this.toastService.success(res.msg)
      },
      error : err =>{
        this.toastService.fail(err.error.message || 'failed to remove item from cart try later')
      }
    })
  }

  checkOut(){
    alert('checkout clicked')
  }

}
