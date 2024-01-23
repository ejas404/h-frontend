import { NgModule } from "@angular/core";
import { TutorAccountComponent } from "app/pages/tutor/tutor-account/tutor-account.component";
import { TutorCourseSinglePageComponent } from "app/pages/tutor/tutor-course-single-page/tutor-course-single-page.component";
import { TutorCourseComponent } from "app/pages/tutor/tutor-course/tutor-course.component";
import { TutorLoginComponent } from "app/pages/tutor/tutor-login/tutor-login.component";
import { TutorNotificationComponent } from "app/pages/tutor/tutor-notification/tutor-notification.component";
import { TutorProfilePageComponent } from "app/pages/tutor/tutor-profile-page/tutor-profile-page.component";
import { TutorProfileComponent } from "app/pages/tutor/tutor-profile/tutor-profile.component";
import { TutorSignupComponent } from "app/pages/tutor/tutor-signup/tutor-signup.component";
import { TutorStudentsComponent } from "app/pages/tutor/tutor-students/tutor-students.component";
import { SharedComponentsModule } from "../custom_modules/shared_components_modules";
import { ReusableComponentsModule } from "../custom_modules/reusables_module";
import { SharedModules } from "../shared_modules";

@NgModule({
    declarations: [
        TutorSignupComponent,
        TutorLoginComponent,
        TutorProfilePageComponent,
        TutorProfileComponent,
        TutorAccountComponent,
        TutorCourseComponent,
        TutorStudentsComponent,
        TutorNotificationComponent,
        TutorCourseSinglePageComponent,
    ],
    imports : [
        SharedModules,
        SharedComponentsModule,
        ReusableComponentsModule,
  
    ]
})
export class TutorModule { }