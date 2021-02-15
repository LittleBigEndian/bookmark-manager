import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Bookmark } from './bookmark.model';
import { CreateBookmark, DeleteBookmark, EditBookmark } from './bookmarks.actions';
import { BookmarksState } from './bookmarks.state';

export const selectBookmarks = (state: BookmarksState) => {
  return state.bookmarks;
};
export const selectBookmarksByGroup = (group: string) =>
  createSelector(selectBookmarks, (bookmarks: Bookmark[]) => {
    return bookmarks.filter((bookmark) => bookmark.group === group);
  });

@Injectable({
  providedIn: 'root',
})
export class BookmarksFacade {
  bookmarks$: Observable<Bookmark[]>;

  constructor(private store: Store<BookmarksState>) {
    this.bookmarks$ = this.store.select(selectBookmarks);
  }

  createBookmark(bookmark: Bookmark): void {
    this.store.dispatch(new CreateBookmark(bookmark));
  }

  editBookmark(editBookmark: EditBookmark): void {
    this.store.dispatch(editBookmark);
  }

  deleteBookmark(bookmark: Bookmark): void {
    this.store.dispatch(new DeleteBookmark(bookmark));
  }

  private selectGroup(group: string): Observable<Bookmark[]> {
    return this.store.select(selectBookmarksByGroup(group));
  }

  getGroups(): Observable<string[]> {
    return this.bookmarks$.pipe(
      map((bookmarks) => {
        return bookmarks
          .map((bookmark) => bookmark.group)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort();
      })
    );
  }

  getBookmarksMapByGroup(group: string): Observable<Map<string, Bookmark[]>> {
    return this.selectGroup(group).pipe(
      map((bookmarks) => {
        return this.bookmarksToMap(bookmarks);
      })
    );
  }

  getBookmarksMap(): Observable<Map<string, Bookmark[]>> {
    return this.bookmarks$.pipe(
      map((bookmarks) => {
        return this.bookmarksToMap(bookmarks);
      })
    );
  }

  private bookmarksToMap(bookmarks: Bookmark[]): Map<string, Bookmark[]> {
    const bookmarksByGroup = new Map<string, Bookmark[]>();

    bookmarks.forEach((bookmark) => {
      let groupBookmarks = bookmarksByGroup.get(bookmark.group);
      if (!groupBookmarks) {
        groupBookmarks = [];
      }
      groupBookmarks.push(bookmark);
      bookmarksByGroup.set(bookmark.group, groupBookmarks);
    });

    return bookmarksByGroup;
  }
}
