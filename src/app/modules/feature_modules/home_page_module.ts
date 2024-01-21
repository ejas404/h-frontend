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
import { LoginComponent } from "app/pages/student/auth-page-components/login/login.component";
import { SignupComponent } from "app/pages/student/auth-page-components/signup/signup.component";
import { LoginOtpComponent } from "app/pages/student/auth-page-components/login-otp/login-otp.component";
import { SharedModules } from "../shared_modules";
import { CoursesComponent } from "app/pages/student/home-page-components/course-page-components/courses-main/courses.component";
import { CourseListComponent } from "app/pages/student/home-page-components/course-page-components/course-list/course-list.component";
import { CourseSidebarComponent } from "app/pages/student/home-page-components/course-page-components/course-sidebar/course-sidebar.component";
import { CourseTopFilterBtnsComponent } from "app/pages/student/home-page-components/course-page-components/course-top-filter-btns/course-top-filter-btns.component";



@NgModule({
    declarations : [
        LoginComponent,
        SignupComponent,
        LoginOtpComponent,
        HomeComponent,
        HomepageComponent,
        TestimonialComponent,
        ContactComponent,
        CoursesComponent,
        SingleCourseHomeComponent,
        SubscribeComponent,
        HomeCoursesComponent,
        FooterComponent,
        CourseListComponent,
        CourseSidebarComponent,
        CourseTopFilterBtnsComponent
    ],
    // exports : [
    //     LoginComponent,
    //     SignupComponent,
    //     LoginOtpComponent,
    //     HomeComponent,
    //     HomepageComponent,
    //     TestimonialComponent,
    //     ContactComponent,
    //     CoursesComponent,
    //     SingleCourseHomeComponent,
    //     SubscribeComponent,
    //     HomeCoursesComponent,
    //     FooterComponent,
    //     CourseListComponent,
    //     CourseSidebarComponent
    // ],
    imports : [
        SharedModules,
        ReusableComponentsModule,
        SharedComponentsModule,
      
    ]
    
})
export class HomePageModule{

}