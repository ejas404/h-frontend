import { NgModule } from "@angular/core";
import {ButtonModule} from 'primeng/button'
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports : [
        ButtonModule,
        ToastModule
    ],
    exports : [
        ButtonModule,
        ToastModule
    ]
})
export class CustomAlertsModule{

}