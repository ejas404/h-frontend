import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CartModel } from "app/core/models/cart_model";
import { VideoWithUrl } from "app/core/models/section_video_model";
import { environment } from "environments/environment";

const BASE_URL = environment.BASE_URL

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
        return this.http.get<{success : boolean ,cartItems : CartModel[] , cartTotal : number }>(`${BASE_URL}/student/cart`)
    }

    getCartList(){
        return this.http.get<{cartList : string[] }>(`${BASE_URL}/student/cart-list`)
    }

    getVideo(id : string,route : string){
        return this.http.get<{video : VideoWithUrl}>(`${BASE_URL}/${route}/get-video/${id}`)
    }


    addProgress(course_id : string, video_id : string){
        return this.http.post(`${BASE_URL}/student/add-progress`,{course_id,video_id})
    }

    getProgress(course_id : string ){
        return this.http.get<{progress : string[]}>(`${BASE_URL}/student/get-progress/${course_id}`)
    }

}