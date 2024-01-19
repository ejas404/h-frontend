import { NgModule } from "@angular/core";
import { CustomImageUrlPipe } from "../../shared/pipes/image-url.pipe";
import { CustomPricePipe } from "../../shared/pipes/price.pipe";
import { CustomDurationPipe } from "app/shared/pipes/custom_duration.pipe";

@NgModule({
    declarations : [
        CustomImageUrlPipe,
        CustomPricePipe,
        CustomDurationPipe
    ],
    exports : [
        CustomImageUrlPipe,
        CustomPricePipe,
        CustomDurationPipe
    ]
})
export class CustomPipeModule{

}