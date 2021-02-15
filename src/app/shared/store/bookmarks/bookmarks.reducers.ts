import { Bookmark } from './bookmark.model';
import * as BookmarksActions from './bookmarks.actions';
import { BookmarksActionTypes } from './bookmarks.actions';
import { initialBookmarksState } from './bookmarks.state';

export type Action = BookmarksActions.All;

export function bookmarksReducer(
  state: Bookmark[] = initialBookmarksState,
  action: Action
) {
  switch (action.type) {
    case BookmarksActionTypes.CREATE_BOOKMARK: {
      console.log(BookmarksActionTypes.CREATE_BOOKMARK);
      return [ ...state, action.payload ];
    }

    case BookmarksActionTypes.EDIT_BOOKMARK: {
      console.log(BookmarksActionTypes.EDIT_BOOKMARK);
      const bookmarks = [...state];
      const index = bookmarks.indexOf(action.oldBookmark);
      if (index !== -1) {
        bookmarks[index] = action.newBookmark;
      }
      
      return bookmarks;
    }

    case BookmarksActionTypes.DELETE_BOOKMARK: {
      console.log(BookmarksActionTypes.DELETE_BOOKMARK);
      const bookmarks = state.filter((bookmark) => bookmark != action.payload);
      return [...bookmarks];
    }

    default:
      return state;
  }
}
