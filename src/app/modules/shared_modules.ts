import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomIconModule } from "./custom_modules/icon_modules";
import { CustomPipeModule } from "./custom_modules/custom_pipe_module";
import { CustomAlertsModule } from "./custom_modules/custom_alerts_modules";
import { RouterModule } from "@angular/router";
import { MatDialogModule } from "@angular/material/dialog";
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
    imports : [
        FormsModule,
        CommonModule,
        CustomIconModule,
        CustomPipeModule,
        CustomAlertsModule,
        RouterModule,
        ReactiveFormsModule,
        ProgressSpinnerModule
    ],
    exports : [
        FormsModule,
        CommonModule,
        CustomIconModule,
        CustomPipeModule,
        CustomAlertsModule,
        RouterModule,
        ReactiveFormsModule,
        MatDialogModule,
        ProgressSpinnerModule
    ]
})
export class SharedModules{

}