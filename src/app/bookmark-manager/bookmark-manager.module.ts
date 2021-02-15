import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsModule } from '../shared/dialogs/dialogs.module';
import { MaterialSharedModule } from '../shared/material-shared.module';
import { BookmarksFacade } from '../shared/store/bookmarks/bookmarks.facade';
import { BookmarkManagerRoutingModule } from './bookmark-manager-routing.module';
import { BookmarkManagerComponent } from './bookmark-manager.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { GroupsComponent } from './groups/groups.component';
import { CreateBookmarkDialogComponent } from './navbar/create-bookmark-dialog/create-bookmark-dialog.component';
import { EditBookmarkDialogComponent } from './navbar/edit-bookmark-dialog/edit-bookmark-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    BookmarkManagerComponent,
    NavbarComponent,
    BookmarksComponent,
    GroupsComponent,
    CreateBookmarkDialogComponent,
    EditBookmarkDialogComponent,
  ],
  exports: [BookmarkManagerComponent],
  imports: [
    BookmarkManagerRoutingModule,
    CommonModule,
    MaterialSharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    DialogsModule,
  ],
  providers: [BookmarksFacade],
})
export class BookmarkManagerModule {}
