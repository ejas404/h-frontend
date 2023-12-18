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
import { studentGuard } from './core/guards/student_guard';
import { SnotfoundComponent } from './pages/student/snotfound/snotfound.component';
import { MainProfileComponent } from './pages/student/profile/main-profile/main-profile.component';
import { CoursesProfileComponent } from './pages/student/profile/courses-profile/courses-profile.component';
import { ConnectionProfileComponent } from './pages/student/profile/connection-profile/connection-profile.component';
import { AccountProfileComponent } from './pages/student/profile/account-profile/account-profile.component';
import { NotificationProfileComponent } from './pages/student/profile/notification-profile/notification-profile.component';
import { StudentProfileComponent } from './pages/student/profile/student-profile/student-profile.component';

const routes: Routes = [
  {path:'login', component : LoginComponent},
  {path : 'signup',component : SignupComponent},
  {
    path : '', component : HomeComponent , 
    children : [
      {path : 'courses', component : CoursesComponent},
      {path : 'about', component : AboutComponent},
      {path : 'contact', component : ContactComponent},
      {path :'',component : HomepageComponent},
    ]
  },
  {path : 'admin' ,canActivate:[adminGuard], component : AdminPageComponent,
   children : [
    {path : '', component : AdminDashboardComponent},
    {path : 'students', component : AdminStudentsComponent},
    {path : 'tutors', component : AdminTutorsComponent},
    {path : 'settings', component : AdminSettingsComponent},
    {path : 'courses', component : AdminCoursesComponent}
   ]
  },
  {path : 'profile',canActivate:[studentGuard] , component : MainProfileComponent,
        children : [
          {path : 'student', component : StudentProfileComponent},
          {path : 'courses', component : CoursesProfileComponent },
          {path : 'connection', component : ConnectionProfileComponent},
          {path : 'account', component : AccountProfileComponent},
          {path : 'notification', component : NotificationProfileComponent},
        ]
    
      },
  {path : 'admin/login', component : AdminLoginComponent},
  {path : '**', component : SnotfoundComponent}
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
