import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './core/state/auth/effect';
import { dashboardReducer } from './core/state/admin/dashboard/reducer';
import { MatDialogModule } from '@angular/material/dialog'
import { CustomIconModule } from './modules/icon_modules';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ButtonComponent } from './reusables/button/button.component';
import { LoginComponent } from './pages/student/login/login.component';
import { SignupComponent } from './pages/student/signup/signup.component';
import { AuthpageComponent } from './pages/student/authpage/authpage.component';
import { InputsComponent } from './reusables/inputs/inputs.component';
import { HomeComponent } from './pages/student/home/home.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/student/homepage/homepage.component';
import { TestimonialComponent } from './pages/student/testimonial/testimonial.component';
import { ContactComponent } from './pages/student/contact/contact.component';
import { SubscribeComponent } from './pages/student/subscribe/subscribe.component';
import { HomeCoursesComponent } from './pages/student/home-courses/home-courses.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminStudentsComponent } from './pages/admin/admin-students/admin-students.component';
import { AdminTutorsComponent } from './pages/admin/admin-tutors/admin-tutors.component';
import { AdminSettingsComponent } from './pages/admin/admin-settings/admin-settings.component';
import { AdminSidebarComponent } from './pages/admin/admin-sidebar/admin-sidebar.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { AdminCoursesComponent } from './pages/admin/admin-courses/admin-courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './core/state/auth/reducer';
import { DashboardEffects } from './core/state/admin/dashboard/effects';
import { SnotfoundComponent } from './pages/student/snotfound/snotfound.component';
import { StudentProfileComponent } from './pages/student/profile/student-profile/student-profile.component';
import { ConnectionProfileComponent } from './pages/student/profile/connection-profile/connection-profile.component';
import { AccountProfileComponent } from './pages/student/profile/account-profile/account-profile.component';
import { MainProfileComponent } from './pages/student/profile/main-profile/main-profile.component';
import { CoursesProfileComponent } from './pages/student/profile/courses-profile/courses-profile.component';
import { SidebarProfileComponent } from './pages/student/profile/sidebar-profile/sidebar-profile.component';
import { studProfReducer } from './core/state/student/profile_page/reducer';
import { StudentProfileEffect } from './core/state/student/profile_page/effects';
import { TutorSignupComponent } from './pages/tutor/tutor-signup/tutor-signup.component';
import { TutorLoginComponent } from './pages/tutor/tutor-login/tutor-login.component';
import { TutorProfilePageComponent } from './pages/tutor/tutor-profile-page/tutor-profile-page.component';
import { TutorProfileComponent } from './pages/tutor/tutor-profile/tutor-profile.component';
import { TutorAccountComponent } from './pages/tutor/tutor-account/tutor-account.component';
import { TutorProfileEffect } from './core/state/tutor/profile/effects';
import { tutorProfReducer } from './core/state/tutor/profile/reducer';
import { PopupComponent } from './shared/popup/popup.component';
import { CustomAlertsModule } from './modules/custom_alerts_modules';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProfileImageComponent } from './pages/student/profile/profile-image/profile-image.component';
import { TutorCourseComponent } from './pages/tutor/tutor-course/tutor-course.component';
import { TutorStudentsComponent } from './pages/tutor/tutor-students/tutor-students.component';
import { TutorNotificationComponent } from './pages/tutor/tutor-notification/tutor-notification.component';
import { TutorPopupComponent } from './shared/tutor-popup/tutor-popup.component';
import { TutorProfileImageComponent } from './pages/tutor/profile-image/profile-image.component';
import { TagsPopupTutorComponent } from './shared/tags-popup-tutor/tags-popup-tutor.component';
import { PopupAddCourseComponent } from './pages/admin/popup-add-course/popup-add-course.component';
import { SingleCourseAdminComponent } from './pages/admin/single-course-admin/single-course-admin.component';
import { CourseImagePopupComponent } from './pages/admin/course-image-popup/course-image-popup.component';
import { singleCourseReducer } from './core/state/admin/courses/reducer';
import { PopupEditCourseComponent } from './pages/admin/popup-edit-course/popup-edit-course.component';
import { CustomImageUrl } from './shared/pipes/image-url.pipe';
import { CustomPricePipe } from './shared/pipes/price.pipe';
import { RequestCoursePopupComponent } from './pages/tutor/request-course-popup/request-course-popup.component';
import { SingleCourseHomeComponent } from './pages/student/single-course-home/single-course-home.component';
import { ConfirmBoxComponent } from './shared/confirm-box/confirm-box.component';
import { LoginOtpComponent } from './pages/student/login-otp/login-otp.component';
import { TablesReusableComponent } from './reusables/tables/tables.component';
import { AdminAddBtnReusableComponent } from './reusables/admin-add-btn/admin-add-btn.component';
import { DeleteBtnReusableComponent } from './reusables/delete-btn/delete-btn.component';
import { BlockBtnReusableComponent } from './reusables/block-btn/block-btn.component';
import { UnblockBtnReusableComponent } from './reusables/unblock-btn/unblock-btn.component';
import { DropdownFilterReusableComponent } from './reusables/filter-dropdown/filer-dropdown.component';
import { CourseLinkReusableComponent } from './reusables/course-link/course-link.component';
import { SingleCourseReusableComponent } from './reusables/single-course/single-course.component';
import { TutorCourseSinglePageComponent } from './pages/tutor/tutor-course-single-page/tutor-course-single-page.component';
import { AuthTokenInterceptor } from './core/interceptors/auth-token-interceptor';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    LoginComponent,
    SignupComponent,
    AuthpageComponent,
    InputsComponent,
    HomeComponent,
    HomepageComponent,
    TestimonialComponent,
    ContactComponent,
    SubscribeComponent,
    HomeCoursesComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminStudentsComponent,
    AdminTutorsComponent,
    AdminSettingsComponent,
    AdminSidebarComponent,
    AdminPageComponent,
    AdminCoursesComponent,
    SnotfoundComponent,
    StudentProfileComponent,
    ConnectionProfileComponent,
    AccountProfileComponent,
    MainProfileComponent,
    CoursesProfileComponent,
    SidebarProfileComponent,
    TutorSignupComponent,
    TutorLoginComponent,
    TutorProfilePageComponent,
    TutorProfileComponent,
    TutorAccountComponent,
    PopupComponent,
    ProfileImageComponent,
    TutorCourseComponent,
    TutorStudentsComponent,
    TutorNotificationComponent,
    TutorPopupComponent,
    TutorProfileImageComponent,
    TagsPopupTutorComponent,
    PopupAddCourseComponent,
    SingleCourseAdminComponent,
    CourseImagePopupComponent,
    PopupEditCourseComponent,
    CustomImageUrl,
    CustomPricePipe,
    RequestCoursePopupComponent,
    SingleCourseHomeComponent,
    ConfirmBoxComponent,
    LoginOtpComponent,
    TablesReusableComponent,
    AdminAddBtnReusableComponent,
    DeleteBtnReusableComponent,
    BlockBtnReusableComponent,
    UnblockBtnReusableComponent,
    DropdownFilterReusableComponent,
    CourseLinkReusableComponent,
    SingleCourseReusableComponent,
    TutorCourseSinglePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomIconModule,
    CustomAlertsModule,
    MatDialogModule,
    ImageCropperModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    StoreModule.forRoot(
      {
        auth: authReducer,
        dashboard: dashboardReducer,
        studProf: studProfReducer,
        tutorProf: tutorProfReducer,
        singleCourse : singleCourseReducer
      }),

    EffectsModule.forRoot(
      [
        AuthEffects,
        DashboardEffects,
        StudentProfileEffect,
        TutorProfileEffect
      ]
    )

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MessageService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
