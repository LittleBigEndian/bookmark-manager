import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { BookmarkManagerModule } from './bookmark-manager/bookmark-manager.module';
import { bookmarksReducer } from './shared/store/bookmarks/bookmarks.reducers';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BookmarkManagerModule,
    StoreModule.forRoot({ bookmarks: bookmarksReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
