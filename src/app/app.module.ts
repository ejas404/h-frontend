import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
    HomeCoursesComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
