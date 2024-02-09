import { NgModule } from "@angular/core";
import { AdminCoursesComponent } from "app/pages/admin/admin-courses/admin-courses.component";
import { AdminDashboardComponent } from "app/pages/admin/admin-dashboard/admin-dashboard.component";
import { AdminLoginComponent } from "app/pages/admin/admin-login/admin-login.component";
import {  AdminPageComponent } from "app/pages/admin/admin-page/admin-page.component";
import { AdminOthersComponent } from "app/pages/admin/admin-others/admin-settings.component";
import { AdminSidebarComponent } from "app/pages/admin/admin-sidebar/admin-sidebar.component";
import {  AdminStudentsComponent } from "app/pages/admin/admin-students/admin-students.component";
import { AdminTutorsComponent } from "app/pages/admin/admin-tutors/admin-tutors.component";
import { SingleCourseAdminComponent } from "app/pages/admin/single-course-admin/single-course-admin.component";
import { SharedComponentsModule } from "../custom_modules/shared_components_modules";
import { ReusableComponentsModule } from "../custom_modules/reusables_module";
import { SharedModules } from "../shared_modules";
import { UpcomingCoursesComponent } from "app/pages/admin/admin-others-componets/upcoming-courses/upcoming-courses.component";
import { AdminAccountComponent } from "app/pages/admin/admin-others-componets/account/account.component";
import { BannerComponent } from "app/pages/admin/admin-others-componets/banner/banner.component";
import { AdminOtherTopbarComponent } from "app/pages/admin/admin-others-componets/admin-other-topbar/admin-other-topbar.component";
import {TabViewModule} from "primeng/tabview"
import { AdminVideoPreviewComponent } from "app/pages/admin/admin-video-preview/admin-video-preview.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { AdminSalesPageComponent } from "app/pages/admin/admin-sales-page/admin-sales-page.component";

@NgModule({
    declarations : [
        AdminLoginComponent,
        AdminDashboardComponent,
        AdminStudentsComponent,
        AdminTutorsComponent,
        AdminOthersComponent,
        AdminSidebarComponent,
        AdminPageComponent,
        AdminCoursesComponent,
        SingleCourseAdminComponent,
        UpcomingCoursesComponent,
        AdminAccountComponent,
        BannerComponent,
        AdminOtherTopbarComponent,
        AdminVideoPreviewComponent,
        AdminSalesPageComponent
    ],
    imports : [
        SharedModules,
        SharedComponentsModule,
        ReusableComponentsModule,
        TabViewModule
    ]
})
export class AdminDashboardModule{

}