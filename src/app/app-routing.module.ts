import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/student/login/login.component';
import { SignupComponent } from './pages/student/signup/signup.component';
import { HomeComponent } from './pages/student/home/home.component';
import { CoursesComponent } from './pages/student/courses/courses.component';
import { AboutComponent } from './pages/student/about/about.component';
import { ContactComponent } from './pages/student/contact/contact.component';
import { HomepageComponent } from './pages/student/homepage/homepage.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AdminSettingsComponent } from './pages/admin/admin-settings/admin-settings.component';
import { AdminStudentsComponent } from './pages/admin/admin-students/admin-students.component';
import { AdminTutorsComponent } from './pages/admin/admin-tutors/admin-tutors.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { AdminCoursesComponent } from './pages/admin/admin-courses/admin-courses.component';
import { adminGuard } from './core/guards/admin_guard';
import { studentBlockGuard, studentGuard } from './core/guards/student_guard';
import { SnotfoundComponent } from './pages/student/snotfound/snotfound.component';
import { MainProfileComponent } from './pages/student/profile/main-profile/main-profile.component';
import { CoursesProfileComponent } from './pages/student/profile/courses-profile/courses-profile.component';
import { ConnectionProfileComponent } from './pages/student/profile/connection-profile/connection-profile.component';
import { AccountProfileComponent } from './pages/student/profile/account-profile/account-profile.component';
import { NotificationProfileComponent } from './pages/student/profile/notification-profile/notification-profile.component';
import { StudentProfileComponent } from './pages/student/profile/student-profile/student-profile.component';
import { TutorProfilePageComponent } from './pages/tutor/tutor-profile-page/tutor-profile-page.component';
import { TutorLoginComponent } from './pages/tutor/tutor-login/tutor-login.component';
import { TutorSignupComponent } from './pages/tutor/tutor-signup/tutor-signup.component';
import { TutorProfileComponent } from './pages/tutor/tutor-profile/tutor-profile.component';
import { TutorAccountComponent } from './pages/tutor/tutor-account/tutor-account.component';
import { tutorGuard } from './core/guards/tutor_guard';
import { TutorCourseComponent } from './pages/tutor/tutor-course/tutor-course.component';
import { TutorStudentsComponent } from './pages/tutor/tutor-students/tutor-students.component';
import { TutorNotificationComponent } from './pages/tutor/tutor-notification/tutor-notification.component';
import { SingleCourseAdminComponent } from './pages/admin/single-course-admin/single-course-admin.component';
import { SingleCourseHomeComponent } from './pages/student/single-course-home/single-course-home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path : 'course/:id', component : SingleCourseHomeComponent},
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'courses', component: CoursesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', component: HomepageComponent },
    ]
  },
  {
    path: 'admin', canActivate: [adminGuard], component: AdminPageComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'students', component: AdminStudentsComponent },
      { path: 'tutors', component: AdminTutorsComponent },
      { path: 'settings', component: AdminSettingsComponent },
      { path: 'courses', component: AdminCoursesComponent }
    ]
  },
  {
    path: 'profile', canActivate: [studentGuard , studentBlockGuard], component: MainProfileComponent,
    children: [
      { path: '', component: StudentProfileComponent },
      { path: 'courses', component: CoursesProfileComponent },
      { path: 'connection', component: ConnectionProfileComponent },
      { path: 'account', component: AccountProfileComponent },
      { path: 'notification', component: NotificationProfileComponent },
    ]

  },
  {
    path: 'tutor',canActivate : [tutorGuard], component: TutorProfilePageComponent,
    children:[
      {path : '',component: TutorProfileComponent},
      {path : 'account', component : TutorAccountComponent},
      {path : 'courses', component : TutorCourseComponent},
      {path : 'students', component : TutorStudentsComponent},
      {path : 'notification', component : TutorNotificationComponent},

    ]
  },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/course/:id', component: SingleCourseAdminComponent},
  {path : 'tutor/login', component : TutorLoginComponent},
  {path : 'tutor/signup', component : TutorSignupComponent},
  { path: '**', component: SnotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forRoot(appRoutes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
