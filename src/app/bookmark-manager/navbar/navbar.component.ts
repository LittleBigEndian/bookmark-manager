import { CreateBookmarkDialogService } from './create-bookmark-dialog/create-bookmark-dialog.service';
import { Component } from '@angular/core';
import { BookmarksFacade } from 'src/app/shared/store/bookmarks/bookmarks.facade';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'bm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private createBookmarkDialogService: CreateBookmarkDialogService,
    private bookmarksFacade: BookmarksFacade
  ) {}

  createBookmark() {
    this.createBookmarkDialogService
      .openDialog()
      .afterClosed()
      .pipe(filter((bookmark) => !!bookmark))
      .subscribe((bookmark) => this.bookmarksFacade.createBookmark(bookmark));
  }
}
