import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "app/core/constant/uri";
import { CartModel } from "app/core/models/cart_model";
import { VideoWithUrl } from "app/core/models/section_video_model";

@Injectable()
export class StudentCourseService{
    constructor(
        private http : HttpClient
    ){}

    addToCart(id : string){
        return this.http.put<{msg : string}>(`${BASE_URL}/student/add-to-cart/${id}`,{})
    }

    removeFromCart(id : string){
        return this.http.delete<{msg : string}>(`${BASE_URL}/student/cart/remove/${id}`)
    }
    
    getCartData(){
        return this.http.get<{cartItems : CartModel[] , cartTotal : number }>(`${BASE_URL}/student/cart`)
    }

    getCartList(){
        return this.http.get<{cartList : string[] }>(`${BASE_URL}/student/cart-list`)
    }

    getVideo(id : string){
        return this.http.get<{video : VideoWithUrl}>(`${BASE_URL}/student/get-video/${id}`)
    }
}