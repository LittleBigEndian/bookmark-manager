import { Action } from '@ngrx/store';
import { Bookmark } from './bookmark.model';

export enum BookmarksActionTypes {
  EDIT_BOOKMARK = '[Bookmark] Edit bookmarks',
  CREATE_BOOKMARK = '[Bookmark] Create bookmarks',
  DELETE_BOOKMARK = '[Bookmark] Delete bookmark',
}

export class CreateBookmark implements Action {
  readonly type = BookmarksActionTypes.CREATE_BOOKMARK;
  constructor(public payload: Bookmark) {}
}

export class EditBookmark implements Action {
  readonly type = BookmarksActionTypes.EDIT_BOOKMARK;
  constructor(public oldBookmark: Bookmark, public newBookmark: Bookmark) {}
}

export class DeleteBookmark implements Action {
  readonly type = BookmarksActionTypes.DELETE_BOOKMARK;
  constructor(public payload: Bookmark) {}
}

export type All = CreateBookmark | EditBookmark | DeleteBookmark;
