import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContactComponent } from "app/pages/student/home-page-components/contact/contact.component";
import { HomeCoursesComponent } from "app/pages/student/home-page-components/home-courses/home-courses.component";
import { HomeComponent } from "app/pages/student/home-page-components/home/home.component";
import { HomepageComponent } from "app/pages/student/home-page-components/homepage/homepage.component";
import { SingleCourseHomeComponent } from "app/pages/student/home-page-components/single-course-home/single-course-home.component";
import { SubscribeComponent } from "app/pages/student/home-page-components/subscribe/subscribe.component";
import { TestimonialComponent } from "app/pages/student/home-page-components/testimonial/testimonial.component";
import { ReusableComponentsModule } from "../custom_modules/reusables_module";
import { FooterComponent } from "app/pages/student/home-page-components/footer/footer.component";
import { SharedComponentsModule } from "../custom_modules/shared_components_modules";
import { CustomPipeModule } from "../custom_modules/custom_pipe_module";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "app/pages/student/auth-page-components/login/login.component";
import { SignupComponent } from "app/pages/student/auth-page-components/signup/signup.component";
import { LoginOtpComponent } from "app/pages/student/auth-page-components/login-otp/login-otp.component";
import { CustomAlertsModule } from "../custom_modules/custom_alerts_modules";
import { FormsModule } from "@angular/forms";
import { SharedModules } from "../shared_modules";


@NgModule({
    declarations : [
        LoginComponent,
        SignupComponent,
        LoginOtpComponent,
        HomeComponent,
        HomepageComponent,
        TestimonialComponent,
        ContactComponent,
        SingleCourseHomeComponent,
        SubscribeComponent,
        HomeCoursesComponent,
        FooterComponent
    ],
    exports : [
        LoginComponent,
        SignupComponent,
        LoginOtpComponent,
        HomeComponent,
        HomepageComponent,
        TestimonialComponent,
        ContactComponent,
        SingleCourseHomeComponent,
        SubscribeComponent,
        HomeCoursesComponent,
        FooterComponent
    ],
    imports : [
        SharedModules,
        ReusableComponentsModule,
        SharedComponentsModule,
      
    ]
    
})
export class HomePageModule{

}