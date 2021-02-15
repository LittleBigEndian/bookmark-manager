import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/operators';
import { DialogsService } from 'src/app/shared/dialogs/dialogs.service';
import { Bookmark } from 'src/app/shared/store/bookmarks/bookmark.model';
import { BookmarksFacade } from 'src/app/shared/store/bookmarks/bookmarks.facade';
import { GroupsComponent } from '../groups/groups.component';
import { EditBookmarkDialogModel } from '../navbar/edit-bookmark-dialog/edit-bookmark-dialog.model';
import { EditBookmarkDialogService } from '../navbar/edit-bookmark-dialog/edit-bookmark-dialog.service';

@Component({
  selector: 'bm-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
  bookmarks$: Observable<Bookmark[]>;
  bookmarksFiltered$: Observable<Bookmark[]>;
  bookmarksByGroup$: Observable<Map<string, Bookmark[]>>;
  bookmarksByGroupFiltered$: Observable<Map<string, Bookmark[]>>;

  constructor(
    private dialogsService: DialogsService,
    private editBookmarkDialogService: EditBookmarkDialogService,
    private route: ActivatedRoute,
    private bookmarksFacade: BookmarksFacade
  ) {}

  ngOnInit(): void {
    this.bookmarks$ = this.bookmarksFacade.bookmarks$;
    this.onChangeGroupParams();
  }

  private onChangeGroupParams() {
    this.route.params
      .pipe(
        map((params) => params['group'] as string),
        filter((group) => !!group)
      )
      .subscribe((group) => {
        this.selectGroup(group);
      });
  }

  editBookmark(bookmark: Bookmark) {
    const model = new EditBookmarkDialogModel(bookmark);

    this.editBookmarkDialogService
      .openDialog(model)
      .afterClosed()
      .pipe(filter((editBookmark) => !!editBookmark))
      .subscribe((editBookmark) => this.bookmarksFacade.editBookmark(editBookmark));
  }

  deleteBookmark(bookmark: Bookmark): void {
    const message = 'Are you sure you want to delete this bookmark?';
    const confirmDialog = this.dialogsService.confirmDialog(message);
    confirmDialog.afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.bookmarksFacade.deleteBookmark(bookmark);
      }
    });
  }

  private selectGroup(group: string) {
    if (group === GroupsComponent.BOOKMARKS) {
      this.bookmarksByGroup$ = this.bookmarksFacade.getBookmarksMap();
    } else {
      this.bookmarksByGroup$ = this.bookmarksFacade.getBookmarksMapByGroup(group);
    }
  }
}
