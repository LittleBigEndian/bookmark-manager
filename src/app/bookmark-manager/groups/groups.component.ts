import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/shared/store/bookmarks/bookmark.model';
import { BookmarksFacade } from 'src/app/shared/store/bookmarks/bookmarks.facade';
import { concatMap, map, take, tap, toArray } from 'rxjs/operators';
import { from } from 'rxjs/internal/observable/from';
import { Observable } from 'rxjs/internal/Observable';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'bm-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  groups$: Observable<string[]>;

  public static BOOKMARKS = 'bookmarks';

  constructor(private bookmarksFacade: BookmarksFacade) {}

  ngOnInit(): void {
    this.groups$ = this.bookmarksFacade.getGroups();
  }

}
