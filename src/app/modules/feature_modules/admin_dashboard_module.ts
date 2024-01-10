import { NgModule } from "@angular/core";
import { AdminCoursesComponent } from "app/pages/admin/admin-courses/admin-courses.component";
import { AdminDashboardComponent } from "app/pages/admin/admin-dashboard/admin-dashboard.component";
import { AdminLoginComponent } from "app/pages/admin/admin-login/admin-login.component";
import {  AdminPageComponent } from "app/pages/admin/admin-page/admin-page.component";
import { AdminSettingsComponent } from "app/pages/admin/admin-settings/admin-settings.component";
import { AdminSidebarComponent } from "app/pages/admin/admin-sidebar/admin-sidebar.component";
import {  AdminStudentsComponent } from "app/pages/admin/admin-students/admin-students.component";
import { AdminTutorsComponent } from "app/pages/admin/admin-tutors/admin-tutors.component";
import { SingleCourseAdminComponent } from "app/pages/admin/single-course-admin/single-course-admin.component";
import { SharedComponentsModule } from "../custom_modules/shared_components_modules";
import { ReusableComponentsModule } from "../custom_modules/reusables_module";
import { SharedModules } from "../shared_modules";

@NgModule({
    declarations : [
        AdminLoginComponent,
        AdminDashboardComponent,
        AdminStudentsComponent,
        AdminTutorsComponent,
        AdminSettingsComponent,
        AdminSidebarComponent,
        AdminPageComponent,
        AdminCoursesComponent,
        SingleCourseAdminComponent,
    ],
    exports : [
        AdminLoginComponent,
        AdminDashboardComponent,
        AdminStudentsComponent,
        AdminTutorsComponent,
        AdminSettingsComponent,
        AdminSidebarComponent,
        AdminPageComponent,
        AdminCoursesComponent,
        SingleCourseAdminComponent
    ], 
    imports : [
        SharedModules,
        SharedComponentsModule,
        ReusableComponentsModule
    ]
})
export class AdminDashboardModule{

}