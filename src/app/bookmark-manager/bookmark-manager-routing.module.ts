import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  {
    path: ':group',
    component: BookmarksComponent,
  },
  {
    path: '',
    redirectTo: `/${GroupsComponent.BOOKMARKS}`,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BookmarkManagerRoutingModule {}
