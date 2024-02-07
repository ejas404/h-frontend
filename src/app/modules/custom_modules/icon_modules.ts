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
    bootstrapBookmarkFill,
    bootstrapCart3,
    bootstrapMortarboardFill,
    bootstrapBellFill,
    bootstrapBarChartLineFill,
    bootstrapBookFill,
    bootstrapPersonFill,
    bootstrapCheckCircleFill,
    bootstrapUpload


} from '@ng-icons/bootstrap-icons';

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
                bootstrapBookmarkFill,
                bootstrapCart3,
                bootstrapMortarboardFill,
                bootstrapBellFill,
                bootstrapBarChartLineFill,
                bootstrapBookFill,
                bootstrapPersonFill,
                bootstrapCheckCircleFill,
                bootstrapUpload
            })
    ],
    exports: [
        NgIconsModule
    ]
})
export class CustomIconModule {

}