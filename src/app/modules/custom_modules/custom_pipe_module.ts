import { NgModule } from "@angular/core";
import { CustomImageUrlPipe } from "../../shared/pipes/image-url.pipe";
import { CustomPricePipe } from "../../shared/pipes/price.pipe";
import { CustomDurationPipe } from "app/shared/pipes/custom_duration.pipe";
import { CustomProfileUrlPipe } from "app/shared/pipes/profile_image.pipe";

@NgModule({
    declarations : [
        CustomImageUrlPipe,
        CustomPricePipe,
        CustomDurationPipe,
        CustomProfileUrlPipe
    ],
    exports : [
        CustomImageUrlPipe,
        CustomPricePipe,
        CustomDurationPipe,
        CustomProfileUrlPipe
    ]
})
export class CustomPipeModule{

}