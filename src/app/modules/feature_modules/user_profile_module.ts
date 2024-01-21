
import { NgModule } from "@angular/core";
import { AccountProfileComponent } from "app/pages/student/profile/account-profile/account-profile.component";
import { ConnectionProfileComponent } from "app/pages/student/profile/connection-profile/connection-profile.component";
import { CoursesProfileComponent } from "app/pages/student/profile/courses-profile/courses-profile.component";
import { MainProfileComponent } from "app/pages/student/profile/main-profile/main-profile.component";
import { SidebarProfileComponent } from "app/pages/student/profile/sidebar-profile/sidebar-profile.component";
import { StudentProfileComponent } from "app/pages/student/profile/student-profile/student-profile.component";
import { SharedComponentsModule } from "../custom_modules/shared_components_modules";
import { ReusableComponentsModule } from "../custom_modules/reusables_module";
import { SharedModules } from "../shared_modules";

@NgModule({
    declarations : [
        StudentProfileComponent,
        ConnectionProfileComponent,
        AccountProfileComponent,
        MainProfileComponent,
        CoursesProfileComponent,
        SidebarProfileComponent,
    ],
    // exports : [
    //     StudentProfileComponent,
    //     ConnectionProfileComponent,
    //     AccountProfileComponent,
    //     MainProfileComponent,
    //     CoursesProfileComponent,
    //     SidebarProfileComponent,
    // ],
    imports : [
        SharedModules,
        SharedComponentsModule,
        ReusableComponentsModule,

    ]
})
export class UserProfileModule{}