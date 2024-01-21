import { NgModule } from "@angular/core";
import { NgIconsModule } from '@ng-icons/core';
import {
    bootstrapFileEarmarkMedicalFill,
    bootstrapGearFill,
    bootstrapGrid1x2Fill,
    bootstrapPeopleFill,
    bootstrapPersonCircle,
    bootstrapTrash3Fill,
    bootstrapLockFill,
    bootstrapUnlockFill,
    bootstrapPencilSquare,
    bootstrapXCircleFill,
    bootstrapStarFill,
    bootstrapExclamationOctagonFill,
    bootstrapExclamationOctagon,
    bootstrapStar,
    bootstrapFileEarmarkText,
    bootstrapBookmarkFill

} from '@ng-icons/bootstrap-icons';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { SharedModules } from "../shared_modules";


@NgModule({
    imports: [
        NgIconsModule.withIcons(
            {
                bootstrapPeopleFill,
                bootstrapGearFill,
                bootstrapGrid1x2Fill,
                bootstrapFileEarmarkMedicalFill,
                bootstrapPersonCircle,
                bootstrapTrash3Fill, 
                bootstrapLockFill,
                bootstrapUnlockFill,
                bootstrapPencilSquare,
                bootstrapXCircleFill,
                bootstrapStarFill,
                bootstrapStar,
                bootstrapExclamationOctagonFill,
                bootstrapExclamationOctagon,
                bootstrapFileEarmarkText,
                bootstrapBookmarkFill
            })
    ],
    exports: [
        NgIconsModule
    ]
})
export class CustomIconModule {

}