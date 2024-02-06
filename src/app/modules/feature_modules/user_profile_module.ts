
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
import { CartProfileComponent } from "app/pages/student/profile/cart-profile/cart-profile.component";
import { CartProductTemplateComponent } from "app/pages/student/profile/cart-product-template/cart-product-template.component";
import { StudentVideoPreviewComponent } from "app/pages/student/student-video-preview/student-video-preview.component";
import { CheckOutPageComponent } from "app/pages/student/profile/check-out-page/check-out-page.component";
import { PaymentSuccessComponent } from "app/pages/payment_sucess";
import { PaymentProcessingComponent } from "app/pages/student/payment-components.ts/payment-processing/payment-processing.component";
import { FreeBuyComponent } from "app/pages/student/payment-components.ts/free-buy/free-buy.component";
import { OauthComponentComponent } from "app/pages/student/auth-page-components/oauth-component/oauth-component.component";


@NgModule({
    declarations : [
        StudentProfileComponent,
        ConnectionProfileComponent,
        AccountProfileComponent,
        MainProfileComponent,
        CoursesProfileComponent,
        SidebarProfileComponent,
        CartProfileComponent,
        CartProductTemplateComponent,
        StudentVideoPreviewComponent,
        CheckOutPageComponent,
        PaymentSuccessComponent,
        PaymentProcessingComponent,
        FreeBuyComponent,
        OauthComponentComponent
    ],
    imports : [
        SharedModules,
        SharedComponentsModule,
        ReusableComponentsModule
    ],

})
export class UserProfileModule{}