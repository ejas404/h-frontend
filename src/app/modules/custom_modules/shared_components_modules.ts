import { NgModule } from "@angular/core";
import { ConfirmBoxComponent } from "app/shared/popups/confirm-box/confirm-box.component";
import { NavbarComponent } from "app/shared/navbar/navbar.component";
import { ProfileImagePopupComponent } from "app/shared/popups/profile-image-popup/popup.component";
import { TagsPopupTutorComponent } from "app/shared/popups/tags-popup-tutor/tags-popup-tutor.component";
import { TutorPopupComponent } from "app/shared/popups/tutor-popup/tutor-popup.component";
import { ImageCropperModule } from "ngx-image-cropper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { TutorProfileImageComponent } from "app/pages/tutor/profile-image/profile-image.component";
import { StudentProfileImageComponent } from "app/pages/student/profile/profile-image/profile-image.component";
import { CourseImagePopupComponent } from "app/shared/popups/course-popups/course-image-popup/course-image-popup.component";
import { PopupAddCourseComponent } from "app/shared/popups/course-popups/popup-add-course/popup-add-course.component";
import { PopupEditCourseComponent } from "app/shared/popups/course-popups/popup-edit-course/popup-edit-course.component";
import { RequestCoursePopupComponent } from "app/shared/popups/course-popups/request-course-popup/request-course-popup.component";
import { SnotfoundComponent } from "app/pages/student/auth-page-components/snotfound/snotfound.component";
import { SharedModules } from "../shared_modules";


@NgModule({
    declarations: [
        ProfileImagePopupComponent,
        NavbarComponent,
        TutorPopupComponent,
        ConfirmBoxComponent,
        TagsPopupTutorComponent,
        TutorProfileImageComponent,
        StudentProfileImageComponent,
        CourseImagePopupComponent,
        PopupAddCourseComponent,
        PopupEditCourseComponent,
        RequestCoursePopupComponent,
        SnotfoundComponent

    ],
    exports: [
        ProfileImagePopupComponent,
        NavbarComponent,
        TutorPopupComponent,
        ConfirmBoxComponent,
        TagsPopupTutorComponent,
        TutorProfileImageComponent,
        StudentProfileImageComponent,
        CourseImagePopupComponent,
        PopupAddCourseComponent,
        PopupEditCourseComponent,
        RequestCoursePopupComponent,
        SnotfoundComponent
    ],
    imports: [
        ImageCropperModule,
        MatFormFieldModule,
        MatChipsModule,
        MatIconModule,
        MatDialogModule,
        SharedModules
    ]
})
export class SharedComponentsModule {

}