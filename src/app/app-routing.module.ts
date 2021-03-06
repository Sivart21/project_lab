import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { LibraryComponent } from './library/library.component';
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'friends', component: FriendsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }