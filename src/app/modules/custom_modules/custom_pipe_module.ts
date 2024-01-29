import { NgModule } from "@angular/core";
import { CustomImageUrlPipe } from "../../shared/pipes/image-url.pipe";
import { CustomPricePipe } from "../../shared/pipes/price.pipe";
import { CustomDurationPipe } from "app/shared/pipes/custom_duration.pipe";
import { CustomProfileUrlPipe } from "app/shared/pipes/profile_image.pipe";
import { CustomCountPluraliserPipe } from "app/shared/pipes/class-count-pluraliser";

@NgModule({
    declarations : [
        CustomImageUrlPipe,
        CustomPricePipe,
        CustomDurationPipe,
        CustomProfileUrlPipe,
        CustomCountPluraliserPipe
    ],
    exports : [
        CustomImageUrlPipe,
        CustomPricePipe,
        CustomDurationPipe,
        CustomProfileUrlPipe,
        CustomCountPluraliserPipe
    ]
})
export class CustomPipeModule{

}