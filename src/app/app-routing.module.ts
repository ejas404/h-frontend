import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/student/login/login.component';
import { SignupComponent } from './pages/student/signup/signup.component';
import { HomeComponent } from './pages/student/home/home.component';
import { CoursesComponent } from './pages/student/courses/courses.component';
import { AboutComponent } from './pages/student/about/about.component';
import { ContactComponent } from './pages/student/contact/contact.component';
import { HomepageComponent } from './pages/student/homepage/homepage.component';

const routes: Routes = [
  {path:'login', component : LoginComponent},
  {path : 'signup',component : SignupComponent},
  {
    path : '', component : HomeComponent , 
    children : [
      {path : 'courses', component : CoursesComponent},
      {path : 'about', component : AboutComponent},
      {path : 'contact', component : ContactComponent},
      {path :'',component : HomepageComponent}
    ]
  }
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
