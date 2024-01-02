import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrl: './confirm-box.component.scss'
})
export class ConfirmBoxComponent {
  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}


export class ConfirmDialogModel {

 constructor(public title: string, public message: string) {
 }
}
