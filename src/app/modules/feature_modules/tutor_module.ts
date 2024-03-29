import { NgModule } from "@angular/core";
import { TutorAccountComponent } from "app/pages/tutor/tutor-account/tutor-account.component";
import { TutorCourseSinglePageComponent } from "app/pages/tutor/tutor-course-single-page/tutor-course-single-page.component";
import { TutorCourseComponent } from "app/pages/tutor/tutor-course/tutor-course.component";
import { TutorLoginComponent } from "app/pages/tutor/tutor-login/tutor-login.component";
import { TutorProfilePageComponent } from "app/pages/tutor/tutor-profile-page/tutor-profile-page.component";
import { TutorProfileComponent } from "app/pages/tutor/tutor-profile/tutor-profile.component";
import { TutorSignupComponent } from "app/pages/tutor/tutor-signup/tutor-signup.component";
import { TutorStudentsComponent } from "app/pages/tutor/tutor-students/tutor-students.component";
import { SharedComponentsModule } from "../custom_modules/shared_components_modules";
import { ReusableComponentsModule } from "../custom_modules/reusables_module";
import { SharedModules } from "../shared_modules";
import { TutorSideNavComponent } from "app/pages/tutor/tutor-side-nav/tutor-side-nav.component";
import { TutorRightSideComponent } from "app/pages/tutor/tutor-right-side/tutor-right-side.component";
import { TutorEducationComponent } from "app/pages/tutor/tutor-education/tutor-education.component";
import { SingleCourseTutorComponent } from "app/pages/tutor/single-course-tutor/single-course-tutor.component";
import { RouterModule, Routes } from "@angular/router";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "environments/environment";

const routes: Routes = [
    { path: '', component: TutorProfileComponent },
    { path: 'account', component: TutorAccountComponent },
    { path: 'courses', component: TutorCourseComponent },
    { path: 'students', component: TutorStudentsComponent },
    { path: 'education', component: TutorEducationComponent },
]


@NgModule({
    declarations: [
        TutorProfilePageComponent,
        TutorProfileComponent,
        TutorAccountComponent,
        TutorCourseComponent,
        TutorStudentsComponent,
        TutorCourseSinglePageComponent,
        TutorSideNavComponent,
        TutorRightSideComponent,
        TutorEducationComponent,
        SingleCourseTutorComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        SharedModules,
        SharedComponentsModule,
        ReusableComponentsModule,
  
    ]
})
export class TutorModule { }