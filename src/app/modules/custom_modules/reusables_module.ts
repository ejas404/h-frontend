import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../../app-routing.module";
import { SharedModules } from "../shared_modules";
import { RouterModule } from "@angular/router";


import { TablesReusableComponent } from "../../reusables/templates/tables/tables.component";
import { AdminAddBtnReusableComponent } from "../../reusables/buttons/admin-add-btn.component";
import { DeleteBtnReusableComponent } from "../../reusables/buttons/delete-btn.component";
import { BlockBtnReusableComponent} from "../../reusables/buttons/block-btn.component";
import { UnblockBtnReusableComponent } from "../../reusables/buttons/unblock-btn.component";
import { DropdownFilterReusableComponent } from "../../reusables/filter-dropdown/filer-dropdown.component";
import { CourseLinkReusableComponent } from "../../reusables/buttons/course-link.component";
import { SingleCourseReusableComponent } from "../../reusables/templates/single-course/single-course.component";
import { CloseBtnReusableComponet } from "app/reusables/buttons/dialog-close-btn.component";
import { CourseReusablePopupComponent } from "app/reusables/templates/course-reusable-popup/course-reusable-popup.component";
import { CourseFilterBtnReusableComponent } from "app/reusables/buttons/course-filter-btn.component";
import { CourseSearchBarComponent } from "app/reusables/templates/course-search-bar/course-search-bar.component";
import { BookmarkIconReusableComponent } from "app/reusables/templates/book-mark-icon";
import { AuthFormButtonComponent } from "app/reusables/buttons/auth-form-btn.component";
import { FormInputReusableComponent } from "app/reusables/inputs/form-input.component";
import { SignupReusableTempComponent } from "app/reusables/templates/signup-reusable-temp/signup-reusable-temp.component";
import { LoginReusableTempComponent } from "app/reusables/templates/login-reusable-temp/login-reusable-temp.component";
import { VideoPreviewComponent } from "app/reusables/templates/video-preview/video-preview.component";
import { CourseSectionsListComponent } from "app/reusables/templates/course-sections-list/course-sections-list.component";
import { CartBtnReusableComponent } from "app/reusables/buttons/carticon-btn-component";
import { QuantityCounterComponent } from "app/reusables/templates/quantity-counter/quantity-counter.component";
import { ProgressSpinnerReusableComponent } from "app/reusables/animations/progress_spinner";
import { CheckoutBoxComponent } from "app/reusables/templates/checkout-box/checkout-box.component";
import { CartBtnComponent } from "app/reusables/buttons/add-go-btn-component";
import { CommonBtnReusableComponent } from "app/reusables/buttons/common-btn-component";



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
        CourseReusablePopupComponent,
        CourseFilterBtnReusableComponent,
        CourseSearchBarComponent,
        BookmarkIconReusableComponent,
        AuthFormButtonComponent,
        FormInputReusableComponent,
        SignupReusableTempComponent,
        LoginReusableTempComponent,
        VideoPreviewComponent,
        CourseSectionsListComponent,
        CartBtnReusableComponent,
        QuantityCounterComponent,
        ProgressSpinnerReusableComponent,
        CheckoutBoxComponent,
        CartBtnComponent,
        CommonBtnReusableComponent

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
        CourseReusablePopupComponent,
        CourseFilterBtnReusableComponent,
        CourseSearchBarComponent,
        BookmarkIconReusableComponent,
        AuthFormButtonComponent,
        FormInputReusableComponent,
        SignupReusableTempComponent,
        LoginReusableTempComponent,
        VideoPreviewComponent,
        CourseSectionsListComponent,
        CartBtnReusableComponent,
        QuantityCounterComponent,
        ProgressSpinnerReusableComponent,
        CheckoutBoxComponent,
        CartBtnComponent,
        CommonBtnReusableComponent

    ],
    imports :[
        RouterModule,
        AppRoutingModule,
        SharedModules
    ]
})
export class ReusableComponentsModule{}