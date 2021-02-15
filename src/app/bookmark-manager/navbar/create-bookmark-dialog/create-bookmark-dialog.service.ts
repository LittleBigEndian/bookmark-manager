import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateBookmarkDialogComponent } from './create-bookmark-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class CreateBookmarkDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(): MatDialogRef<CreateBookmarkDialogComponent> {
    const dialog = this.dialog.open(CreateBookmarkDialogComponent);
    return dialog;
  }
}
