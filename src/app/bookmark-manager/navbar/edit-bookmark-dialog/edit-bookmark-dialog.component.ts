import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditBookmark } from 'src/app/shared/store/bookmarks';
import { Bookmark } from 'src/app/shared/store/bookmarks/bookmark.model';
import { EditBookmarkDialogModel } from './edit-bookmark-dialog.model';

@Component({
  selector: 'bm-edit-bookmark-dialog',
  templateUrl: './edit-bookmark-dialog.component.html',
})
export class EditBookmarkDialogComponent implements OnInit {
  form: FormGroup;
  private bookmark: Bookmark;


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditBookmarkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditBookmarkDialogModel
  ) {
    this.bookmark = data.bookmark;
  }

  ngOnInit(): void {
    this.createForm(this.bookmark);
  }

  private createForm(bookmark: Bookmark) {
    this.form = this.fb.group({
      name: [bookmark.name],
      url: [bookmark.url, Validators.required],
      group: [bookmark.group, Validators.required],
    });
  }

  editBookmark() {
    const bookmark = this.form.value as Bookmark;
    const editBookmark = new EditBookmark(this.bookmark, bookmark);
    this.dialogRef.close(editBookmark);
  }
}
