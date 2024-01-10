import { Injectable } from "@angular/core";
import { ConfirmBoxComponent, ConfirmDialogModel } from "../../../shared/popups/confirm-box/confirm-box.component";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class ConfirmBoxService{

    constructor(private dialog : MatDialog){}

    confirmDialog(msg : string): Observable<boolean> {
        const message = msg;
    
        const dialogData = new ConfirmDialogModel("Confirm Action", message);
    
        const dialogRef = this.dialog.open(ConfirmBoxComponent, {
          maxWidth: "400px",
          data: dialogData
        });
    
        return dialogRef.afterClosed()
      }
}