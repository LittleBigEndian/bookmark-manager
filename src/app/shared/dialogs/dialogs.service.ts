import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogModel } from './confirm-dialog/confirm-dialog.model';

@Injectable({
  providedIn: 'root',
})
export class DialogsService {
  constructor(public dialog: MatDialog) {}

  confirmDialog(message: string, title?: string): MatDialogRef<ConfirmDialogModel> {
    const dialogModel = new ConfirmDialogModel(message, title);

    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: dialogModel,
    });

    return confirmDialog;
  }
}
