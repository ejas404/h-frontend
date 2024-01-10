import { NgModule } from "@angular/core";
import { CustomImageUrlPipe } from "../../shared/pipes/image-url.pipe";
import { CustomPricePipe } from "../../shared/pipes/price.pipe";

@NgModule({
    declarations : [
        CustomImageUrlPipe,
        CustomPricePipe
    ],
    exports : [
        CustomImageUrlPipe,
        CustomPricePipe
    ]
})
export class CustomPipeModule{

}