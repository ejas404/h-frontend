import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../../app-routing.module";
import { CustomIconModule } from "./icon_modules";


import { TablesReusableComponent } from "../../reusables/templates/tables/tables.component";
import { AdminAddBtnReusableComponent } from "../../reusables/buttons/admin-add-btn/admin-add-btn.component";
import { DeleteBtnReusableComponent } from "../../reusables/buttons/delete-btn/delete-btn.component";
import { BlockBtnReusableComponent} from "../../reusables/buttons/block-btn/block-btn.component";
import { UnblockBtnReusableComponent } from "../../reusables/buttons/unblock-btn/unblock-btn.component";
import { DropdownFilterReusableComponent } from "../../reusables/filter-dropdown/filer-dropdown.component";
import { CourseLinkReusableComponent } from "../../reusables/buttons/course-link/course-link.component";
import { SingleCourseReusableComponent } from "../../reusables/templates/single-course/single-course.component";
import { RouterModule } from "@angular/router";
import { CustomPipeModule } from "./custom_pipe_module";
import { CommonModule } from "@angular/common";
import { CustomAlertsModule } from "./custom_alerts_modules";
import { CloseBtnReusableComponet } from "app/reusables/buttons/dialog-close-btn.component";
import { CourseReusablePopupComponent } from "app/reusables/templates/course-reusable-popup/course-reusable-popup.component";
import { FormsModule } from "@angular/forms";



@NgModule({
    declarations : [
        TablesReusableComponent,
        AdminAddBtnReusableComponent,
        DeleteBtnReusableComponent,
        BlockBtnReusableComponent,
        UnblockBtnReusableComponent,
        DropdownFilterReusableComponent,
        CourseLinkReusableComponent,
        SingleCourseReusableComponent,
        CloseBtnReusableComponet,
        CourseReusablePopupComponent


    ],
    exports : [
        TablesReusableComponent,
        AdminAddBtnReusableComponent,
        DeleteBtnReusableComponent,
        BlockBtnReusableComponent,
        UnblockBtnReusableComponent,
        DropdownFilterReusableComponent,
        CourseLinkReusableComponent,
        SingleCourseReusableComponent,
        CloseBtnReusableComponet,
        CourseReusablePopupComponent

    ],
    imports :[
        CommonModule,
        CustomIconModule,
        RouterModule,
        CustomPipeModule,
        AppRoutingModule,
        CustomAlertsModule,
        FormsModule
    ]
})
export class ReusableComponentsModule{}