import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './core/state/auth/effect';
import { dashboardReducer } from './core/state/admin/dashboard/reducer';


import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './core/state/auth/reducer';
import { DashboardEffects } from './core/state/admin/dashboard/effects';
import { studProfReducer } from './core/state/student/profile_page/reducer';
import { StudentProfileEffect } from './core/state/student/profile_page/effects';
import { TutorProfileEffect } from './core/state/tutor/profile/effects';
import { tutorProfReducer } from './core/state/tutor/profile/reducer';


import { ConfirmationService, MessageService } from 'primeng/api';
import { singleCourseReducer } from './core/state/admin/courses/reducer';
import { AuthTokenInterceptor } from './core/interceptors/auth-token-interceptor';
import { SharedModules } from './modules/shared_modules';
import { HomePageModule } from './modules/feature_modules/home_page_module';
import { AdminDashboardModule } from './modules/feature_modules/admin_dashboard_module';
import { TutorModule } from './modules/feature_modules/tutor_module';
import { UserProfileModule } from './modules/feature_modules/user_profile_module';
import { SharedComponentsModule } from './modules/custom_modules/shared_components_modules';
import { ReusableComponentsModule } from './modules/custom_modules/reusables_module';
import { CourseTopFilterBtnsComponent } from './pages/student/home-page-components/course-page-components/course-top-filter-btns/course-top-filter-btns.component';
import { SignupReusableTempComponent } from './reusables/templates/signup-reusable-temp/signup-reusable-temp.component';
import { LoginReusableTempComponent } from './reusables/templates/login-reusable-temp/login-reusable-temp.component';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModules,
    SharedComponentsModule,
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
