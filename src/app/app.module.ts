import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapFileEarmarkMedicalFill, bootstrapGearFill, bootstrapGrid1x2Fill, bootstrapPeopleFill, bootstrapPersonCircle } from '@ng-icons/bootstrap-icons';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './core/state/auth/effect';
import { dashboardReducer } from './core/state/admin/dashboard/reducer';


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
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './core/state/auth/reducer';
import { ProfileComponent } from './pages/student/profile/profile.component';
import { DashboardEffects } from './core/state/admin/dashboard/effects';
import { SnotfoundComponent } from './pages/student/snotfound/snotfound.component';



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
    ProfileComponent,
    SnotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgIconsModule.withIcons(
      {
        bootstrapPeopleFill,
        bootstrapGearFill,
        bootstrapGrid1x2Fill,
        bootstrapFileEarmarkMedicalFill,
        bootstrapPersonCircle   
      }),
    StoreModule.forRoot({auth : authReducer,dashboard : dashboardReducer}),
    EffectsModule.forRoot([AuthEffects, DashboardEffects])

  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
