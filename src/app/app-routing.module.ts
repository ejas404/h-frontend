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
import { ProfileComponent } from './pages/student/profile/profile.component';

const routes: Routes = [
  {path:'login', component : LoginComponent},
  {path : 'signup',component : SignupComponent},
  {path : 'profile', component : ProfileComponent},
  {
    path : '', component : HomeComponent , 
    children : [
      {path : 'courses', component : CoursesComponent},
      {path : 'about', component : AboutComponent},
      {path : 'contact', component : ContactComponent},
      {path :'',component : HomepageComponent}
    ]
  },
  {path : 'admin' ,canActivate:[adminGuard], component : AdminPageComponent,
   children : [
    {path : 'dashboard', component : AdminDashboardComponent},
    {path : 'students', component : AdminStudentsComponent},
    {path : 'tutors', component : AdminTutorsComponent},
    {path : 'settings', component : AdminSettingsComponent},
    {path : 'courses', component : AdminCoursesComponent}
   ]
  },
  {path : 'admin/login', component : AdminLoginComponent}
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
