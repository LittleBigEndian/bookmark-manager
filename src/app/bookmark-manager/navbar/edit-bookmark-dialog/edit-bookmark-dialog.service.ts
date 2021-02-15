import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditBookmarkDialogComponent } from './edit-bookmark-dialog.component';
import { EditBookmarkDialogModel } from './edit-bookmark-dialog.model';

@Injectable({
  providedIn: 'root',
})
export class EditBookmarkDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(
    model: EditBookmarkDialogModel
  ): MatDialogRef<EditBookmarkDialogComponent> {
    const dialog = this.dialog.open(EditBookmarkDialogComponent, {
      data: model,
    });
    return dialog;
  }
}
