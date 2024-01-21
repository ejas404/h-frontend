import { Component } from "@angular/core";

@Component({
    selector : 'reusable-form-input',
    template : `<input 
    class="border  border-light-gray text-black placeholder-light-gray text-sm px-2 py-2 w-full my-2 rounded"
    type="password" placeholder="Password" autocomplete="off" required >`
})
export class FormInputReusableComponent{
    
}