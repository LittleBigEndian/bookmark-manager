import { Bookmark } from './bookmark.model';

export class BookmarksState {
  constructor(public bookmarks: Bookmark[]) {}
}

export const initialBookmarksState: Bookmark[] = [
    {
      name: 'Google',
      url: 'http://google.com',
      group: 'personal',
    },
    {
      name: 'Avaloq',
      url: 'https://www.avaloq.com/en/home',
      group: 'work',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      group: 'leisure',
    },
  ];
