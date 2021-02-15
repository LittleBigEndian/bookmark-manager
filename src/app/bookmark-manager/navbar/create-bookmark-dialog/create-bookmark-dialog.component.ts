import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Bookmark } from 'src/app/shared/store/bookmarks/bookmark.model';

@Component({
  selector: 'bm-create-bookmark-dialog',
  templateUrl: './create-bookmark-dialog.component.html'
})
export class CreateBookmarkDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CreateBookmarkDialogComponent>) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: [null],
      url: [null, Validators.required],
      group: [null, Validators.required],
    });
  }

  createBookmark() {
    const bookmark = this.form.value as Bookmark;
    this.dialogRef.close(bookmark);
  }
}
